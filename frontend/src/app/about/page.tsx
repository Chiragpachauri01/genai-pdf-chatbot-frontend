export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-lg leading-relaxed text-gray-700">
        This project is a <strong>GenAI-powered PDF Chatbot</strong>. 
        Upload a PDF, and ask questions to get smart, contextual answers powered by Hugging Face & FAISS.
      </p>
      <p className="mt-4 text-gray-600">
        It’s built with <strong>Next.js (frontend)</strong> and <strong>FastAPI (backend)</strong>, 
        styled using Tailwind CSS.
      </p>
    </div>
  );
}
