const express = require("express");
const router = express.Router();

const getAIResponse = require("../services/aiService");

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please enter your farming question"
            });
        }

        const reply = await getAIResponse(message);

        res.status(200).json({
            success: true,
            userMessage: message,
            reply: reply
        });

    } catch (error) {
        console.error("AI Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Unable to generate an AI response. Please try again."
        });
    }
});

module.exports = router;