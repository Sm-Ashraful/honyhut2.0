// config.js

const isProduction = process.env.NODE_ENV === "production";

export const baseUrl = isProduction
  ? "https://honyhut.com"
  : "http://localhost:3000"; // Adjust the port as needed for your development server
