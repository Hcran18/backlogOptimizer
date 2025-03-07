from pydantic import BaseModel, Field
from .game import Game
from typing import List

class OptimizationRequest(BaseModel):
    games: List[Game] = Field(..., min_items=1) # must have at least one game
    budget: float = Field(..., ge=0) # must be greater than or equal to 0
    max_time: float = Field(..., ge=0) # must be greater than or equal to 0
    owned_consoles: List[str] 
    favorite_genres: List[str]
    genre_caps: dict