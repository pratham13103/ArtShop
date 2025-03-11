import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check your index.html file.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
