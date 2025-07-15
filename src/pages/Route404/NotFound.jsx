// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you requested does not exist.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#6200ee",
          color: "white",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#4500b5")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#6200ee")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
