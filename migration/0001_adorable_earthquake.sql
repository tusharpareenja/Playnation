CREATE TABLE "tournaments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"type" varchar(100) NOT NULL,
	"venue" text NOT NULL,
	"date_from" timestamp NOT NULL,
	"date_to" timestamp NOT NULL,
	"organizer_name" varchar(255) NOT NULL,
	"phone_number" varchar(15) NOT NULL,
	"banner_photo" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
