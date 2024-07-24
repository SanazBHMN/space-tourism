import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// static imports
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
