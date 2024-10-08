import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./router/ErrorPage.tsx";

const router = createBrowserRouter(
  [{ path: "/", element: <App />, errorElement: <ErrorPage /> }],
  {
    basename: "/Portfolio",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
