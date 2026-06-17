import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("f84bfc973457098", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
