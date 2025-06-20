# 🤖 AI Code Reviewer

An intelligent code review tool powered by **Gemini AI**. Simply paste your code, click a button, and get smart code review suggestions instantly.

![AI Code Reviewer Banner](https://github.com/Harshit9026/Ai-code-reviewer/blob/main/src/assets/ai-app1.png)
![AI Code Reviewer Banner](https://github.com/Harshit9026/Ai-code-reviewer/blob/main/src/assets/ai-app2.png)
![AI Code Reviewer Banner](https://github.com/Harshit9026/Ai-code-reviewer/blob/main/src/assets/ai-app3.png)

---

## 🚀 Live Demo

- **Frontend:** [https://ai-code-reviewer.vercel.app](https://ai-code-reviewer.vercel.app)
- **Backend:** [https://ai-code-review-backend-1.onrender.com](https://ai-code-review-backend-1.onrender.com)

---

## ✨ Features

- 🧠 Code analysis powered by Google Gemini AI
- ⚡ Instant response to code snippets
- 💻 Simple and elegant user interface with React + Tailwind CSS
- 🔗 Seamless integration between frontend and backend
- 📦 Fully deployed using **Vercel** and **Render**

---

## 🛠 Tech Stack

| Layer     | Technology                   |
|-----------|------------------------------|
| Frontend  | React, Tailwind CSS, Axios   |
| Backend   | Node.js, Express.js, dotenv  |
| AI        | Gemini API                   |
| Deploy    | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

ai-code-reviewer/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ └── package.json
├── server/ # Node backend
│ ├── src/
│ ├── .env
│ └── server.js
├── README.md
└── .gitignore

## Backend Setup

cd server
npm install
Add a .env file:

env
Copy
Edit
GEMINI_API_KEY=your_gemini_api_key_here
Then start the server:

bash
Copy
Edit
node server.js

## Frontend Setup

cd ../client
npm install
npm run dev
Visit http://localhost:5173 to view the app.


```bash
git add README.md screenshots/
git commit -m "Added README with screenshots"
git push origin main




