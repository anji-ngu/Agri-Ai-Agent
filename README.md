# 🌱 Agri AI Agent

An AI-powered agricultural assistant designed to help farmers get practical guidance about crops, pests, diseases, fertilizers, and farming practices.

## 📌 Project Overview

Agri AI Agent aims to make agricultural information more accessible through an interactive chatbot. Farmers can ask questions about farming problems and receive guidance through an AI-powered assistant.

## ✨ Features

- 🌾 Interactive agricultural chatbot
- 🤖 AI-powered responses using OpenAI API
- 🌱 Crop-related guidance
- 🐛 Pest and disease management guidance
- 🧪 Fertilizer usage information
- 💾 MongoDB database connectivity
- ⚡ React-based user interface
- 🔗 Node.js and Express backend

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend |
| HTML & CSS | User interface |
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB Atlas | Database |
| OpenAI API | AI response generation |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
Agri-Ai-Agent/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── services/
│   │   └── aiService.js
│   ├── server.js
│   └── package.json
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx
│   │   │   └── FeatureCard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/anji-ngu/Agri-Ai-Agent.git
```

### 2. Open the project

```bash
cd Agri-Ai-Agent
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start the backend:

```bash
npm run dev
```

### 4. Setup Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## 🔐 Environment Variables

The following environment variables are required:

- `PORT` – Backend server port.
- `MONGO_URI` – MongoDB Atlas connection string.
- `OPENAI_API_KEY` – OpenAI API key.

**Security:** Never upload