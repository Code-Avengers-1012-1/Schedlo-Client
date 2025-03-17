import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Routers from "./Router/Routes";
import AuthProvider from "./auth/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
