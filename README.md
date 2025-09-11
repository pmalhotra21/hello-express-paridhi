# Hello Express - Paridhi

This is my assignment repository for demonstrating a **standard Git-based development workflow** using Node.js and Express.

---

## 🚀 Features
- Serves static HTML files from the `public/` folder.
- Routes:
  - `/` → Home page
  - `/paridhi` → Custom HTML page
  - `/api/paridhi` → API endpoint returning JSON
  - `/api/query?name=YourName` → Example query parameter
  - `/api/url/:id` → Example URL parameter
  - `/api/body` → Example POST body
  - `/health` → Health check endpoint returning `{ "status": "ok" }`

---

## ⚙️ How to Run Locally

```bash
npm install
npm start
