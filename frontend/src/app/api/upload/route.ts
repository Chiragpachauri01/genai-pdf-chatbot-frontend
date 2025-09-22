// src/app/api/upload/route.ts
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  console.log("Received upload request");
  try {
    const formData = await request.formData();
    const res = await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData, // forward file as-is
    });

    const data = await res.json();

    return NextResponse.json(data); // send same response back to frontend
  } catch (err) {
    console.error("Upload API error:", err);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
};
