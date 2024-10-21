import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createRoutesFromElements,
  createHashRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "./router/ErrorPage.tsx";
import Home from "./router/Home.tsx";
import Projects from "./router/Projects.tsx";
import Contact from "./router/Contact.tsx";
import Images from "./router/Images.tsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="images" element={<Images />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
