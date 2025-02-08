import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import logger from "@/lib/logger";
import { sendVerificationMail } from "@/lib/zeptomailer/mailer";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    logger.info(`Received email: ${email}`);

    const token = crypto.randomBytes(32).toString("hex");

    // Save email to database
    const newEmail = await prisma.email.create({
      data: { email, token, verified: false },
    });

    await sendVerificationMail(email, token);

    return NextResponse.json(
      {
        message:
          "Great! We've sent you a verification email to your email address.",
        newEmail,
      },
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
