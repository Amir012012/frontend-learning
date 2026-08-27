import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UsersList from "./User";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersList />
  </StrictMode>
);
