"use client";

import { useState } from "react";
import { askQuestion } from "@/lib/api";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ fileId }: { fileId: string }) {
  console.log("Rendering ChatWindow with fileId:", fileId);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const answer = await askQuestion(fileId, input);
    const botMessage = { role: "bot", text: answer || "No response" };
    setMessages((prev) => [...prev, botMessage]);
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-4">
      <div className="h-64 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} text={msg.text} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about the PDF..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
