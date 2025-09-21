from transformers import pipeline
from app.services.embedding import model as embed_model
from app.services import faiss_store

qa_pipeline = pipeline("question-answering", model="distilbert-base-cased-distilled-squad")

def answer_question(question, data):
    index = data["index"]
    chunks = data["chunks"]

    # Embed the question
    q_vec = embed_model.encode([question])

    # Search FAISS
    top_indices = faiss_store.search_index(index, q_vec[0])

    # Get best context
    context = " ".join([chunks[i] for i in top_indices])

    # Run QA
    result = qa_pipeline(question=question, context=context)
    return result["answer"]
