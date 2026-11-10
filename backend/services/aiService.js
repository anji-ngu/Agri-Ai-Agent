
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getAIResponse(question) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.4,
        messages: [
            {
                role: "system",
                content: `You are an expert agricultural assistant
                helping Indian farmers.

                Answer the user's exact question directly.
                Do not give a generic greeting.
                Give practical, simple step-by-step advice.
                Explain crop pests, diseases, prevention,
                irrigation and fertilizer management.
                Never invent pesticide dosages.
                Ask follow-up questions only when necessary.`
            },
            {
                role: "user",
                content: question
            }
        ]
    });

    const reply = response.choices[0].message.content;

    console.log("Farmer question:", question);
    console.log("AI reply:", reply);

    return reply;
}

module.exports = getAIResponse;
