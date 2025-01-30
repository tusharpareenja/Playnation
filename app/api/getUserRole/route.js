// Import necessary modules
import { db, users } from '@/Schema/user';
import { eq } from 'drizzle-orm';

// Named export for the GET method
export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    console.log('Search Params:', searchParams.toString()); // Log the full query string
  
    const userId = searchParams.get('userId'); // Extract userId
  
    if (!userId) {
      return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
    }
  
    try {
        const user = await db.select().from(users).where(eq(users.id, userId)).execute();
  
      if (user.length > 0) {
        return new Response(JSON.stringify({ role: user[0].role }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
      }
    } catch (error) {
      console.error('Error fetching user role:', error);
      return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
  }
  
