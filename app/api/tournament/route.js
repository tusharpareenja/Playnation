import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { tournaments } from "@/Schema/tournament";
import { v2 as cloudinary } from "cloudinary";
import { eq } from "drizzle-orm";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type");

    if (!contentType || !contentType.startsWith("multipart/form-data")) {
      return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }

    const formData = await req.formData();
    const file = formData.get("bannerPhoto");

    if (!file) {
      return NextResponse.json({ error: "Banner photo is required" }, { status: 400 });
    }

    // Convert file to Buffer and upload to Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "tournaments" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(buffer);
    });

    const {
      name,
      description,
      type,
      venue,
      dateFrom,
      dateTo,
      organizerName,
      phoneNumber,
    } = Object.fromEntries(formData);

    const newTournament = await db.insert(tournaments).values({
      name,
      description,
      type,
      venue,
      dateFrom: new Date(dateFrom),
      dateTo: new Date(dateTo),
      organizerName,
      phoneNumber,
      bannerPhoto: uploadResponse.secure_url, // Cloudinary Image URL
    }).returning();

    return NextResponse.json(newTournament, { status: 201 });

  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Tournament ID is required" }, { status: 400 });
    }

    // Find the tournament to get the banner URL
    const tournament = await db.select().from(tournaments).where(eq(tournaments.id, id));

    if (!tournament.length) {
      return NextResponse.json({ error: "Tournament not found" }, { status: 404 });
    }

    // Extract Cloudinary public ID from the URL and delete the image
    const bannerUrl = tournament[0].bannerPhoto;
    const publicId = bannerUrl.split("/").pop().split(".")[0]; // Extracts public ID

    await cloudinary.uploader.destroy(`tournaments/${publicId}`);

    // Delete the tournament from the database
    await db.delete(tournaments).where(eq(tournaments.id, id));

    return NextResponse.json({ message: "Tournament deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req) {
    try {
      const { searchParams } = new URL(req.url);
      const type = searchParams.get("type");
  
      if (!type) {
        return NextResponse.json({ error: "Tournament type is required" }, { status: 400 });
      }
  
      const tournamentList = await db.select().from(tournaments).where(eq(tournaments.type, type));
  
      return NextResponse.json(tournamentList, { status: 200 });
  
    } catch (error) {
      console.error("Fetch Error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
