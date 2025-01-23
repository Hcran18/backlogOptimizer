from pydantic import BaseModel

class Game(BaseModel):
    name: str
    price: float
    average_time: float
    genres: list[str]
    score: float
    available_consoles: list[str]