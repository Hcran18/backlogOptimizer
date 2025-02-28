# Backlog Optimizer

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6c8c6fe-4b4d-4f26-81d7-3715fe562bed/deploy-status)](https://app.netlify.com/sites/gamingbacklogger/deploys)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgamingbacklogger.netlify.app&count_bg=%2300FFCC&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Views+-+Daily%2FTotal&edge_flat=false)](https://hits.seeyoufarm.com)

## Overview

Backlog Optimizer is a web-based application designed to help users organize and prioritize their game backlog. With an intelligent optimization algorithm, the app streamlines game prioritization based on various factors such as score, price, and completion time. Future features like account creation, wishlisting, and calendar scheduling will make managing your gaming experience more seamless and enjoyable.

## Features

- **Game Backlog Management**: Organize, prioritize, and track the games in your backlog.
- **Optimization Algorithm**: Automatically rank games based on factors like completion time, score, and price.

## Future Features

### Mid 2025:
- **Premium Features**: Account creation, wishlisting games, and saving unused games for future use.
- **Enhanced Optimization**: Integrate wishlist games into optimization and save games for future planning.

### Late 2025:
- **Minimal Data Entry**: Just input the game's name and price, and the system will auto-fetch data such as completion time, score, consoles, and genres.
- **Calendar Integration**: Automatically sync your calendar for scheduling game sessions and playtime.

### 2026 and Beyond:
- **AI-Powered Game Recommendations**: Personalized game suggestions based on your backlog and preferences.
- **Social Features**: Engage with friends, compare progress, and participate in community challenges.

## Getting Started

### Prerequisites
To run Backlog Optimizer locally, you will need:

- **Docker**: For containerizing the application and running it in a controlled environment.
- **Docker Compose**: To easily manage multi-container Docker applications.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/backlog-optimizer.git
   cd backlog-optimizer
   ```

2. **Build and run the application using Docker Compose:**
   ```bash
   docker-compose up
   ```
   This will build the necessary containers, start the app, and make it available on http://localhost:5173.

3. **Shut down the containers when you're done:**
   ```bash
   docker-compose down --rmi all --volumes
   ```
   This command stops the containers and removes the images and volumes used during the session.

## Technologies Used

- **Frontend**:
  - **React**
  - **Vite**
  - **TailwindCSS**
  - **Shadcn UI**
  - **ActernityUI**
  
- **Backend**:
  - **Python**
  - **FastAPI**
  
- **Optimization Algorithm**:
  - A custom-built linear programming algorithm that factors in game completion time, review score, price, and other user-defined variables to help users optimize and prioritize their backlog efficiently. Uses the simplex method.

## Contributing

We welcome contributions to Backlog Optimizer! Here’s how you can get started:

1. **Fork the Repository**: Click the "Fork" button at the top-right of this repository to create your own copy of the project.

2. **Create a Feature Branch**: Create a new branch with a descriptive name for the feature you're working on.
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes:** Implement the feature or fix the issue you're addressing. Be sure to write clear, concise commit messages.

4. **Commit Your Changes:** Once you're happy with your changes, commit them to your branch.
   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

5. **Push to Your Fork:** Push your changes to your forked repository on GitHub.
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request:** Open a pull request from your branch to the main repository, and include a brief description of your changes and why they’re needed.

Please ensure that your code follows our coding style and passes any automated tests before submitting a pull request.

We also encourage writing unit tests for any new features or bug fixes to help maintain the codebase's stability.
