<h1 align="center">
  Interactive Spreadsheet
</h1>

An interactive spreadsheet-like UI built with **React**, **TypeScript**, and **Tailwind CSS**.

---
## 🌐 Live Project

👉 [View Live Demo](https://spreadsheet-react-five.vercel.app/)

---

## 💻 Tech Stack

- **React 18** – UI library
- **TypeScript** – Static type checking
- **Vite** – Fast build tool
- **Tailwind CSS** – Utility-first styling
- **ESLint + Prettier** – Code linting and formatting

---

## ✨ Features
- The UI is not dead. Every button/cell/heading changes its state or log something.
- Arrow key navigation between cells.
- Sticky table headers for better readability on scroll
- Clickable cells with dynamic border highlight on selection
- Structured code using TypeScript and reusable components
- Passes ESLint and TypeScript checks
- Optimized for Vite build process

---

## ⚙️ Setup Instructions

1. **Download and install Node.js** from [here](https://nodejs.org/).
2. **Verify Installation**:
    ```bash
    node -v
    ```
3. **Create React App** (for the frontend, Vite is used):
    Use the following command to create a Vite React app in your folder:
    ```bash
    npm create vite@latest <app-name> 
    ```
4. **Clone the repository**
   ```bash
      git clone https://github.com/simran-dhiman01/spreadsheet-react.git \
      cd spreadsheet-react
   ```


5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Lint the code** 
   ```bash
   npm run lint
   ```

8. **Run type check**
   ```bash
   npm run type-check   
  
---

## 🔍 Testing & Quality
- ✅ Code passes npm run lint (ESLint + Prettier)

- ✅ Code passes npm run type-check (TypeScript)

---

## 🎯 Trade-offs & Decisions
- Focused on cell-level interactivity rather than full spreadsheet editing
- Used inline Tailwind classes for fast styling (no external CSS)
- Sticky headers depend on native browser support
- State-driven navigation for simplicity; large datasets may require performance optimization

---

## 🚀 Deployment
  This app can be easily deployed on platforms like Vercel or Netlify. Make sure to connect your GitHub repo and follow the build settings:

- Build Command: npm run build
- Output Directory: dist/

---
<h6 align="center">
  Created by Simranjeet Kaur
</h6>


