// app/api/upload/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    // Example: dummy fileId
    return NextResponse.json({ fileId: "12345" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}
