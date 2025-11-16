require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple ping endpoint to verify server is running
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong', env: process.env.NODE_ENV || 'development' });
});

// Example auth endpoint (placeholder)
app.post('/api/login', (req, res) => {
  const { tin, password } = req.body;
  // TODO: replace with real authentication and database
  if (tin && password) {
    return res.json({ success: true, token: 'fake-jwt-token', tin });
  }
  res.status(400).json({ success: false, message: 'Missing tin or password' });
});

// Serve frontend build in production if present
const path = require('path');
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'build');
const fs = require('fs');

if (fs.existsSync(frontendBuildPath)) {
  app.use(express.static(frontendBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
