from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services import qa
from app.models.memory import memory_store

router = APIRouter()

class AskRequest(BaseModel):
    fileId: str
    question: str

class AskResponse(BaseModel):
    answer: str
    fileId: str
    context: list[str] | None = None

@router.post("/", response_model=AskResponse)
async def ask_question(req: AskRequest):
    if req.fileId not in memory_store:
        raise HTTPException(status_code=404, detail="File not found")

    data = memory_store[req.fileId]
    # Optionally, get relevant context chunks if your qa service supports it
    context_chunks = getattr(qa, "find_relevant_chunks", lambda q, d: None)(req.question, data.get("chunks", []))
    answer = qa.answer_question(req.question, data, context=context_chunks) if context_chunks else qa.answer_question(req.question, data)

    return AskResponse(
        answer=answer,
        fileId=req.fileId,
        context=context_chunks
    )
