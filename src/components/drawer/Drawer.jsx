import closeIcon from "../../assets/icons/icon-close.svg";
import Navbar from "../navbar/Navbar";

import "./drawer.scss";

function Drawer({ handleCloseDrawer }) {
  return (
    <div className="drawer">
      <button onClick={handleCloseDrawer} className="drawer--close-button">
        <img src={closeIcon} alt="close" />
      </button>
      <Navbar />
    </div>
  );
}

export default Drawer;
