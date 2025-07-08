const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const data = require('./data');
const aiData = require('./dataAI'); // Import AI data

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini AI dengan error handling
let genAI;
try {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY tidak ditemukan di file .env');
  }
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  console.log('✅ Gemini AI berhasil diinisialisasi');
} catch (error) {
  console.error('❌ Error inisialisasi Gemini AI:', error.message);
}

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

// Personal Assistant - Clean & Organized
app.post('/api/assistant', async (req, res) => {
  console.log('📩 Request diterima:', req.body);
  
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Pesan tidak boleh kosong'
      });
    }

    if (!genAI) {
      return res.status(500).json({
        success: false,
        error: 'AI service tidak tersedia'
      });
    }

    console.log('🤖 Mengirim ke Gemini AI...');

    // Gunakan system prompt dari dataAI.js
    const model = genAI.getGenerativeModel({ 
      model: aiData.aiSettings.model 
    });
    
    const prompt = `${aiData.systemPrompt}\n\nPertanyaan User: ${message}`;
    
    console.log('🔄 Menunggu response dari Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ Response diterima');
    
    res.json({
      success: true,
      response: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Gemini AI Error:', error);
    
    res.status(500).json({
      success: false,
      error: aiData.responseTemplates.error,
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Endpoint untuk mendapatkan AI settings (opsional)
app.get('/api/ai-info', (req, res) => {
  res.json({
    model: aiData.aiSettings.model,
    features: Object.keys(aiData.keywords),
    available: true
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`🤖 AI Model: ${aiData.aiSettings.model}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
});
