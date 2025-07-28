// main.tsx или index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // здесь находится RouterProvider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
