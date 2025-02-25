import pulp
import json
from model.game import Game
from typing import List


class Optimizer():
    genre_weights = {}

    genre_cap = {"Indie": 3, "Adventure": 2, "Third-Person Shooter": 1}

    def __init__(self, games: List[Game], budget: float, max_time: float, owned_consoles: List[str], favorite_genres: List[str]):
        self.games = games 
        self.budget = budget
        self.max_time = max_time
        self.owned_consoles = owned_consoles
        self.favorite_genres = favorite_genres

        # Calculate genre weights based on favorite genres starting with two moving down by .2
        for i, genre in enumerate(favorite_genres):
            self.genre_weights[genre] = 2 - (i * 0.2)

    @staticmethod
    def calculate_weighted_score(game: Game, genre_weights):
        # Access game attributes using dot notation
        genre_weight = sum(genre_weights.get(genre, 1) for genre in game.genres)
        score_weight = game.score / 100
        weighted_score = score_weight * genre_weight
        return weighted_score

    def optimize(self):
        # Create an optimization problem (maximize)
        problem = pulp.LpProblem("Game_Optimization", pulp.LpMaximize)

        # Create decision variables (binary: 1 if game is selected, 0 otherwise)
        game_vars = {game.name: pulp.LpVariable(f"x_{game.name}", cat='Binary') for game in self.games}

        # Objective function: Maximize the weighted enjoyment score for each game
        problem += pulp.lpSum([self.calculate_weighted_score(game, self.genre_weights) * game_vars[game.name] for game in self.games])

        # Price Constraint: Total price of selected games should not exceed the budget
        problem += pulp.lpSum([game.price * game_vars[game.name] for game in self.games]) <= self.budget

        # Time Constraint: Total time of selected games should not exceed the max time
        problem += pulp.lpSum([game.average_time * game_vars[game.name] for game in self.games]) <= self.max_time

        # Console Constraints: Game must be available on at least one owned console
        for game in self.games:
            if not any(console in self.owned_consoles for console in game.available_consoles):
                problem += game_vars[game.name] == 0

        # Genre Constraints: Ensure genre limits are not exceeded
        for genre, cap in self.genre_cap.items():
            problem += pulp.lpSum([game_vars[game.name] for game in self.games if genre in game.genres]) <= cap

        # Solve the problem
        problem.solve(pulp.PULP_CBC_CMD(msg=False))

        # Prepare the result: which games were selected
        result = {
            "games": []
        }

        for game in self.games:
            if pulp.value(game_vars[game.name]) == 1:
                result["games"].append({
                    "name": game.name,
                    "score": game.score,
                    "price": game.price,
                    "average_time": game.average_time,
                    "genres": game.genres,
                    "available_consoles": game.available_consoles
                })

        # Convert the result to JSON format
        return json.dumps(result, indent=4)
