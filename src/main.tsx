import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(
  document.getElementById("rswp-admin-page") as HTMLElement,
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
