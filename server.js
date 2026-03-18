const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Proxy endpoint for chat
app.post('/api/chat', async (req, res) => {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/chat', req.body, {
            headers: {
                'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error in chat endpoint:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Proxy endpoint for briefing
app.post('/api/briefing', async (req, res) => {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/briefing', req.body, {
            headers: {
                'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error in briefing endpoint:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Proxy endpoint for coach
app.post('/api/coach', async (req, res) => {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/coach', req.body, {
            headers: {
                'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error in coach endpoint:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Proxy endpoint for schedule generation
app.post('/api/schedule', async (req, res) => {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/schedule', req.body, {
            headers: {
                'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error in schedule generation endpoint:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
