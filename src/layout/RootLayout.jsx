import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
