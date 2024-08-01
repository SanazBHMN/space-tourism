import { useState } from "react";
// components
import Navbar from "../navbar/Navbar";
import Drawer from "../drawer/Drawer";
// hooks
import useSize from "../../hooks/useSize";
// static
import logo from "../../assets/icons/logo.svg";
import hamburgerIcon from "../../assets/icons/icon-hamburger.svg";
// styles
import "./header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth] = useSize();

  const isMobile = windowWidth < 769;

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div className="navbar--line"></div>
        {isMobile ? (
          isOpen ? (
            <Drawer handleCloseDrawer={handleCloseDrawer} />
          ) : (
            <img
              src={hamburgerIcon}
              className="menu"
              alt="menu"
              onClick={handleOpenDrawer}
            />
          )
        ) : (
          <Navbar />
        )}
      </header>
    </>
  );
}

export default Header;
