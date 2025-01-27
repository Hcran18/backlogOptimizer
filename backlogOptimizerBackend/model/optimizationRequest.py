from pydantic import BaseModel
from .game import Game
from typing import List

class OptimizationRequest(BaseModel):
    games: List[Game]
    budget: float
    max_time: float
    owned_consoles: List[str]