import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App></App>
      </ClerkProvider>
    </StrictMode>
    ,
  </BrowserRouter>
);
