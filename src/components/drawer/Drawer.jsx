import closeIcon from "../../assets/icons/icon-close.svg";
import Navbar from "../navbar/Navbar";

import "./drawer.scss";

function Drawer({ handleCloseDrawer }) {
  return (
    <div
      className="drawer"
      style={{
        backgroundColor: "#413a3a",
        opacity: "0.9",
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        width: "200px",
      }}
    >
      <img onClick={handleCloseDrawer} src={closeIcon} alt="close" />
      <Navbar />
    </div>
  );
}

export default Drawer;
