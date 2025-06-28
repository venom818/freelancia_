// src/api/auth.js
import client from "./client";

export const login = async (data) => {
  const response = await client.post("/api/login", data);
  return response.data;
};

export const register = async (data) => {
    const response = await client.post("/api/signup", data);
    return response.data;
  };

  export const logout = async (data) => {
    const response = await client.post("/api/logout");
    return response.data;
  };

  export const freelancerProfile = async () => {
    console.log("API Base URL:", import.meta.env.VITE_API_URL);
    console.log("Full URL:", `${import.meta.env.VITE_API_URL}/api/profile/basic`);
    console.log("Token:", localStorage.getItem("token"));
    
    try {
      const response = await client.get("/api/profile/basic");
      console.log("API Response:", response);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      console.error("Error Response:", error.response);
      throw error;
    }
  };

  export const clientProfile = async () => {
    const response = await client.get("/api/profile/basic");
    return response.data;
  };