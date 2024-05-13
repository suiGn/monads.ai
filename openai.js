import dotenv from 'dotenv';
console.log("Monads.");
const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function queryOpenAI(promptText) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    const data = {
        model: "text-davinci-002",
        prompt: promptText,
        max_tokens: 150
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', data, { headers });
        console.log("Response from OpenAI:", response.data.choices[0].text);
    } catch (error) {
        console.error("Error querying OpenAI:", error);
    }
}

queryOpenAI("Hello, who are you?");
