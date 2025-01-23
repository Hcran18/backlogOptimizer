# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install any dependencies
RUN pip install -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]