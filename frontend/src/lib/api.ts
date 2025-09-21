const API_BASE = "http://localhost:8000"; // FastAPI backend URL
export async function uploadFile(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.fileId;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function askQuestion(fileId: string, question: string): Promise<string | null> {
  try {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileId, question }),
    });
    const data = await res.json();
    return data.answer;
  } catch (err) {
    console.error(err);
    return null;
  }
}
