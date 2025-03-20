import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Job market insights coming soon!" });
}
