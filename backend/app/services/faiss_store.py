import faiss
import numpy as np

def create_index(vectors):
    dim = vectors.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(np.array(vectors, dtype="float32"))
    return index

def search_index(index, query_vector, top_k=3):
    distances, indices = index.search(
        np.array([query_vector], dtype="float32"), top_k
    )
    return indices[0]
