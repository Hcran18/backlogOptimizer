from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model.optimizationRequest import OptimizationRequest

from service.optimizer import Optimizer
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://gamingbacklogger.netlify.app"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

@app.get("/health")
def read_root():
    return {"status": "ok"}

@app.post("/optimize/")
def read_root(request: OptimizationRequest):
    start_time = time.time()
    
    optimizer = Optimizer(request.games, request.budget, request.max_time, request.owned_consoles, request.favorite_genres, request.genre_caps)
    result = optimizer.optimize()
    
    end_time = time.time()
    optimization_time = end_time - start_time
    print(f"Optimization took {optimization_time} seconds")
    
    return result
