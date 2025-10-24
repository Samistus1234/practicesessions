# Full Stack Application

A complete full stack application with React frontend and Node.js/Express backend, containerized with Docker.

## Features

- **Frontend**: React application with modern UI
- **Backend**: RESTful API built with Node.js and Express
- **Containerization**: Docker and Docker Compose for easy deployment
- **CRUD Operations**: Create, read, update, and delete items
- **Health Check**: API health monitoring endpoint

## Architecture

```
├── frontend/           # React application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/            # Node.js/Express API
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml  # Docker orchestration
└── deploy.sh          # Deployment script
```

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

### Option 1: Using the deployment script (Recommended)

```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual deployment

```bash
# Build and start the containers
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

## Accessing the Application

Once deployed, you can access:

- **Frontend**: http://localhost
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## API Endpoints

### Health Check
- `GET /api/health` - Check API health status

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a specific item
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

## Development

### Running Backend Locally

```bash
cd backend
npm install
npm start
```

The backend will run on http://localhost:5000

### Running Frontend Locally

```bash
cd frontend
npm install
npm start
```

The frontend will run on http://localhost:3000

## Docker Commands

```bash
# Build images
docker-compose build

# Start containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild and restart
docker-compose up -d --build --force-recreate

# Remove all containers and volumes
docker-compose down -v
```

## Technology Stack

### Frontend
- React 18
- Axios for HTTP requests
- CSS3 for styling
- Nginx for serving in production

### Backend
- Node.js
- Express.js
- CORS middleware
- In-memory data storage (can be extended with MongoDB/PostgreSQL)

### DevOps
- Docker
- Docker Compose
- Nginx

## Customization

### Adding a Database

To add MongoDB:

1. Update `docker-compose.yml`:
```yaml
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

2. Update backend dependencies and connection logic

### Environment Variables

Backend (.env):
```
PORT=5000
NODE_ENV=production
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
```

## Troubleshooting

### Port Already in Use

If port 80 or 5000 is already in use, modify the ports in `docker-compose.yml`:

```yaml
services:
  frontend:
    ports:
      - "8080:80"  # Change 80 to 8080
  backend:
    ports:
      - "5001:5000"  # Change 5000 to 5001
```

### Containers Not Starting

Check logs:
```bash
docker-compose logs
```

Rebuild containers:
```bash
docker-compose down
docker-compose up -d --build
```

## License

MIT

## Contributing

Feel free to submit issues and pull requests!
