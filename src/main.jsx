// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import default export dari Redux store
import { Provider } from "react-redux";
import store from "./store"; // Pastikan Anda mengimpor store yang benar
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pastikan path yang benar
import { AuthProvider } from "./admin/context/AuthContext.jsx"; // Pastikan path yang benar

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}> {/* Menyediakan store Redux ke seluruh aplikasi */}
      <AuthProvider>
        <ToastContainer position="top-left" />
        <App />
      </AuthProvider>
    </Provider>
  );
} else {
  console.error("Root element not found");
}
