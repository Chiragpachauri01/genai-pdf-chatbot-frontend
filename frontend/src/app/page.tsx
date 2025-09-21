"use client";

import { useState } from "react";
import FileUpload from "../components/FileUpload";
import ChatWindow from "../components/ChatWindow";

export default function HomePage() {
  const [fileId, setFileId] = useState<string | null>(null);

  return (
    <main className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">📄 GenAI PDF Chatbot</h1>
      <FileUpload onUpload={setFileId} />
      {fileId && <ChatWindow fileId={fileId} />}
    </main>
  );
}
