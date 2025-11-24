import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EmployeesProvider from "./Context/EmployeeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <EmployeesProvider>
        <App />
      </EmployeesProvider>
  </StrictMode>
);
