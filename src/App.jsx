import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// static imports
import "./App.scss";

function App() {
  const location = useLocation();
  const url = location.pathname.endsWith("/")
    ? "home"
    : location.pathname.startsWith("/destination")
    ? "destination"
    : location.pathname.startsWith("/crew")
    ? "crew"
    : "technology";

  return (
    <div className={`App bg bgImage-${url}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
