import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
});


export default openai;