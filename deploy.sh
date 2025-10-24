#!/bin/bash

echo "========================================="
echo "Full Stack Deployment Script"
echo "========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "Error: Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "Step 1: Stopping any existing containers..."
docker-compose down 2>/dev/null || docker compose down 2>/dev/null || true
echo ""

echo "Step 2: Building Docker images..."
if docker compose version &> /dev/null; then
    docker compose build
else
    docker-compose build
fi
echo ""

echo "Step 3: Starting the application..."
if docker compose version &> /dev/null; then
    docker compose up -d
else
    docker-compose up -d
fi
echo ""

echo "========================================="
echo "Deployment Complete!"
echo "========================================="
echo ""
echo "Frontend: http://localhost"
echo "Backend API: http://localhost:5000"
echo "Health Check: http://localhost:5000/api/health"
echo ""
echo "To view logs:"
echo "  docker-compose logs -f"
echo ""
echo "To stop the application:"
echo "  docker-compose down"
echo "========================================="
