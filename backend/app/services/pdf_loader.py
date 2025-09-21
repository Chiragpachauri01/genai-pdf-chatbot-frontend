import PyPDF2

def extract_text(file):
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""

    # Split into smaller chunks (paragraphs)
    chunks = [chunk.strip() for chunk in text.split("\n") if chunk.strip()]
    return chunks
