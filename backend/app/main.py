from fastapi import FastAPI
from app.routes import upload, ask

app = FastAPI(title="GenAI PDF Chatbot (Local)")

app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(ask.router, prefix="/ask", tags=["Q&A"])
