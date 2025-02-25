from pydantic import BaseModel, Field

class Game(BaseModel):
    name: str
    price: float = Field(..., ge=0) # must be greater than or equal to 0
    average_time: float = Field(..., ge=0) # must be greater than or equal to 0
    genres: list[str]
    score: float = Field(..., ge=0, le=100) # must be between 0 and 100
    available_consoles: list[str]