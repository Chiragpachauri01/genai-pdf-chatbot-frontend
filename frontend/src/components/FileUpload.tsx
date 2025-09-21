"use client";

import { useState } from "react";
import { uploadFile } from "../lib/api";

export default function FileUpload({ onUpload }: { onUpload: (id: string) => void }) {
  const [loading, setLoading] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const fileId = await uploadFile(file);
    setLoading(false);

    if (fileId) onUpload(fileId);
  }

  return (
    <div className="p-4 border-2 border-dashed rounded-xl text-center bg-white shadow">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer text-blue-600 font-medium"
      >
        {loading ? "Uploading..." : "Click to upload PDF"}
      </label>
    </div>
  );
}
