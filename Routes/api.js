const express = require('express');
const router = express.Router();
require('dotenv').config();
const openai = require('openai');

// Initialize OpenAI client
const client = new openai.OpenAI(process.env.API_KEY);

router.post('/chat', async (req, res) => {
    try {
        const user_input = req.body.user_input;

        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful mental health assistant." },
                { role: "user", content: user_input }
            ],
            max_tokens: 150
        });
        
        res.json({ response: response.choices[0].message.content.trim() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
