import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import DestinationBase from "./pages/destination/DestinationBase.jsx";
import DestinationPage from "./pages/destination/DestinationPage.jsx";
import CrewBase from "./pages/crew/CrewBase.jsx";
import CrewPage from "./pages/crew/CrewPage.jsx";
import TechnologyBase from "./pages/technology/TechnologyBase.jsx";
import TechnologyPage from "./pages/technology/TechnologyPage.jsx";
import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationBase />}>
        <Route index element={<Navigate to="moon" replace />} />
        <Route path=":name" element={<DestinationPage />} />
      </Route>
      <Route path="/crew" element={<CrewBase />}>
        <Route index element={<Navigate to="douglas-hurley" replace />} />
        <Route path=":name" element={<CrewPage />} />
      </Route>
      <Route path="/technology" element={<TechnologyBase />}>
        <Route index element={<Navigate to="launch-vehicle" replace />} />
        <Route path=":name" element={<TechnologyPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
