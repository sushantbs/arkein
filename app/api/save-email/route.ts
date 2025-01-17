import { NextResponse } from "next/server";
import logger from "@/lib/logger";

const database = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate the email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save email to database (mocked here)
    database.push({ email, createdAt: new Date() });
    logger.info(`Received email: ${email}`);

    // Return success response
    return NextResponse.json(
      { message: "Email saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving email", error },
      { status: 500 }
    );
  }
}
