import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {
    const cars = await prisma.car.findMany();
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Błąd pobierania samochodów" }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const data = await req.json();
    const newCar = await prisma.car.create({ data });
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Błąd dodawania samochodu" }, { status: 500 });
  }
}
