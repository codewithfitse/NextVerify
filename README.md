<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/codewithfitse/NextVerify">
    <img src="public/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">NextVerify</h3>

  <p align="center">
    Transaction Link & PDF Verification Tool  
    <br />
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/codewithfitse/NextVerify/issues">Report Bug</a>
    ·
    <a href="https://github.com/codewithfitse/NextVerify/issues">Request Feature</a>
  </p>
</p>

---

## 🏆 Overview

**NextVerify** is a **high-performance transaction verification tool** that parses PDF receipts, validates transaction links, and provides instant results with a sleek, responsive UI.  
Built for **speed**, **accuracy**, and **security** using modern web technologies.

---

## 📸 Demo

<p align="center">
  <img src="public/screenshot.png" alt="App Screenshot" width="800">
</p>

---

## ✨ Features

- 🔍 **Transaction Link Checker** – Paste any transaction link and verify instantly.
- 📄 **PDF Receipt Parsing** – Extract and validate payment details directly from PDF.
- ⚡ **Ultra-Fast** – Powered by [Vite](https://vitejs.dev/) for rapid load & build times.
- 🎨 **Modern UI** – Fully responsive interface styled with [Tailwind CSS](https://tailwindcss.com/).
- 🔒 **Secure** – Data processed safely with API integration via [Axios](https://axios-http.com/).

---

## 🛠 Tech Stack

| Category     | Technology |
|--------------|------------|
| Frontend     | [Vite](https://vitejs.dev/), [React](https://react.dev/) |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) |
| Networking   | [Axios](https://axios-http.com/) |
| PDF Parsing  | [pdf-parse](https://www.npmjs.com/package/pdf-parse) |
| Deployment   | Vercel / Netlify |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/codewithfitse/NextVerify.git
cd NextVerify
npm install
```
---

NextVerify/
 ├─ src/
 │   ├─ components/    # Reusable UI Components
 │   ├─ pages/         # Main Screens
 │   ├─ utils/         # PDF parsing & helper functions
 │   ├─ App.jsx
 │   └─ main.jsx
 ├─ public/            # Static assets (logo, images)
 ├─ package.json
 ├─ tailwind.config.js
 └─ vite.config.js
 
---

### 📜 Usage
Paste a transaction link or upload a PDF receipt.

The app fetches data via Axios and parses transaction details.

Verification results are displayed instantly with a success or error status.

### 🤝 Contributing
Contributions are welcome!
Please fork the repository, create a new branch, and submit a pull request.

### 📄 License
Distributed under the MIT License.
See LICENSE for more information.

<p align="center"> Made with ❤️ by <a href="https://github.com/codewithfitse">codewithfitse</a> </p> ```


