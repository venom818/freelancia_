// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { RefreshProvider } from "./contexts/refreshcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RefreshProvider>
      {" "}
      {/* ✅ Wrap App inside RefreshProvider */}
      <App />
    </RefreshProvider>
  </React.StrictMode>
);
