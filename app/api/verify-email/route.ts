import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token) {
      return NextResponse.json(
        { message: "Invalid verification token" },
        { status: 400 }
      );
    }

    // Find the email record by token
    const emailEntry = await prisma.email.findFirst({
      where: { token },
    });

    if (!emailEntry || emailEntry.email !== email) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Update the email as verified
    await prisma.email.update({
      where: { email: emailEntry.email },
      data: { verified: true },
    });

    return NextResponse.json(
      { message: "Email successfully verified!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Verification failed", error },
      { status: 500 }
    );
  }
}
