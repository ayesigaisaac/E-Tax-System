# Backend (Node/Express)

This is a minimal Node/Express backend scaffold for the E-Tax System.

Quick start:

1. From the repository root, install dependencies:

   cd backend
   npm install

2. Run in development (auto-restarts with nodemon):

   npm run dev

3. Production:

   npm start

Endpoints included:

- GET /api/ping -> { message: 'pong' }
- POST /api/login -> { success: true, token } (placeholder)

This server will serve the frontend `frontend/build` folder if present (so you can deploy both together).
