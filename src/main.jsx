import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
// import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
