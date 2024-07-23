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
      <Route path="/destination" element={<DestinationPage />}>
        <Route path="moon" />
        <Route path="mars" />
        <Route path="europa" />
        <Route path="titan" />
      </Route>
      <Route path="/crew" element={<CrewPage />}>
        <Route path="douglas-hurley" />
        <Route path="mark-shuttleworth" />
        <Route path="victor-glover" />
        <Route path="anousheh-ansari" />
      </Route>
      <Route path="/technology" element={<TechnologyPage />}>
        <Route path="launch-vehicle" />
        <Route path="spaceport" />
        <Route path="space-capsule" />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
