import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Import Prisma

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
export async function POST(req) {
    const { email, username, password } = await req.json();

    const newUser = await prisma.user.create({
      data: { email, username, password },
    });
  
    return NextResponse.json(newUser);
  }