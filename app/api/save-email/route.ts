import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import logger from "@/lib/logger";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    logger.info(`Received email: ${email}`);

    // Save email to database
    const newEmail = await prisma.email.create({
      data: { email },
    });

    return NextResponse.json(
      { message: "Email saved successfully!", newEmail },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Error saving email",
        error,
      },
      { status: 500 }
    );
  }
}
