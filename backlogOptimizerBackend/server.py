from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model.optimizationRequest import OptimizationRequest

from service.optimizer import Optimizer
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/optimize/")
def read_root(request: OptimizationRequest):
    start_time = time.time()
    
    optimizer = Optimizer(request.games, request.budget, request.max_time, request.owned_consoles, request.favorite_genres)
    result = optimizer.optimize()
    
    end_time = time.time()
    optimization_time = end_time - start_time
    print(f"Optimization took {optimization_time} seconds")
    
    return result
