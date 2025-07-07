const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());

// Endpoint untuk education
app.get('/api/education', (req, res) => {
  res.json(data.educationHistory);
});

// Endpoint untuk skills
app.get('/api/skills', (req, res) => {
  res.json(data.skills);
});

// Endpoint untuk projects
app.get('/api/projects', (req, res) => {
  res.json(data.projects);
});

// Endpoint untuk experiences
app.get('/api/experiences', (req, res) => {
  res.json(data.experiences);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
