export default function MessageBubble({ role, text }: { role: string; text: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-xs ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
