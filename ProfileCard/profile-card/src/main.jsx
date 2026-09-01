import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  Render from "./State.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Render />
  </StrictMode>
);
