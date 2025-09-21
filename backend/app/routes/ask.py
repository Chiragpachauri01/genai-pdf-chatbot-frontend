from fastapi import APIRouter
from pydantic import BaseModel
from app.services import qa
from app.models.memory import memory_store

router = APIRouter()

class AskRequest(BaseModel):
    fileId: str
    question: str

@router.post("/")
async def ask_question(req: AskRequest):
    if req.fileId not in memory_store:
        return {"answer": "File not found"}

    data = memory_store[req.fileId]
    answer = qa.answer_question(req.question, data)
    return {"answer": answer}
