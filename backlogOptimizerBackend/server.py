from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model.optimizationRequest import OptimizationRequest

from service.optimizer import Optimizer

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
    optimizer = Optimizer(request.games, request.budget, request.max_time)
    result = optimizer.optimize()
    return result
