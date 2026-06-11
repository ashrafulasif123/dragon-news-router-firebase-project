import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./AuthContext/AuthProvider.jsx";
import CategoryProvider from "./CategoryContext/CategoryProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <RouterProvider router={router}></RouterProvider>
      </CategoryProvider>
    </AuthProvider>
  </StrictMode>
);
