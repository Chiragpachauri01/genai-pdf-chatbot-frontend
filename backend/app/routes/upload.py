from fastapi import APIRouter, UploadFile, File
from app.services import pdf_loader, embedding, faiss_store
from app.models.memory import memory_store
import uuid

router = APIRouter()

@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())

    # Extract text
    text_chunks = pdf_loader.extract_text(file.file)

    # Create embeddings
    vectors = embedding.embed_text(text_chunks)

    # Store in FAISS
    index = faiss_store.create_index(vectors)

    # Save to memory
    memory_store[file_id] = {"index": index, "chunks": text_chunks}

    return {"fileId": file_id, "chunks": len(text_chunks)}
