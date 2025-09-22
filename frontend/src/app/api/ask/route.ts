import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    // Forward request to FastAPI backend
    const res = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Ask API error:", err);
    return NextResponse.json({ error: "Failed to get answer" }, { status: 500 });
  }
};
