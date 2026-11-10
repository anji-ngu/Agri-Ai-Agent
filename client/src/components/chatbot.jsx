
import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste! 🌱 I am your Agri AI Assistant. Tell me about your crop or farming problem."
    }
  ]);

  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const question = message.trim();

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: question }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: question })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to get response");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "Backend is not connected yet. Please start the AI backend. 🌱"
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot">
      <h2>🌱 Agri AI Assistant</h2>
      <p>Your smart farming companion</p>

      <div className="messages">
        {messages.map((msg) => (
          <div className={`message ${msg.sender}`} key={msg.id}>
            <strong>
              {msg.sender === "user" ? "You: " : "Agri AI: "}
            </strong>
            {msg.text}
          </div>
        ))}

        {loading && <div className="message bot">Thinking... 🌿</div>}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Ask about crops, pests, fertilizers..."
        />

        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Wait..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
