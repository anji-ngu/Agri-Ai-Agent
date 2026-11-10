
import React from "react";
import "./App.css";

import FeatureCard from "./components/FeatureCard";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>🌱 Agri AI Agent</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#assistant">AI Assistant</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>
          Smart Farming with
          <span> Artificial Intelligence</span>
        </h1>

        <p>
          Your intelligent farming assistant.
          Get solutions for crops, fertilizers,
          pesticides and agricultural problems.
        </p>

        <button
          onClick={() =>
            document.getElementById("assistant")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Our Smart Farming Features</h2>

        <div className="feature-container">

          <FeatureCard
            icon="🤖"
            title="AI Farming Assistant"
            description="Ask farming questions and get intelligent agricultural guidance."
          />

          <FeatureCard
            icon="📸"
            title="Product Scanner"
            description="Scan fertilizers and pesticides to understand their usage and dosage."
          />

          <FeatureCard
            icon="🎤"
            title="Voice Assistant"
            description="Interact with the farming assistant using voice."
          />

        </div>
      </section>

      {/* AI Chatbot */}
      <section id="assistant" className="assistant-section">
        <h2>Ask Your Farming Questions</h2>

        <p>
          Get guidance for your agricultural problems.
        </p>

        <Chatbot />
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Agri AI Agent | Smart Technology for Smart Farming 🌱
        </p>
      </footer>

    </div>
  );
}

export default App;
