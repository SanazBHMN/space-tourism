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
  const isDesktop = windowWidth > 1440;

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
        {isDesktop && <div className="navbar--line"></div>}
        {isMobile ? (
          isOpen ? (
            <Drawer handleCloseDrawer={handleCloseDrawer} />
          ) : (
            <button onClick={handleOpenDrawer} className="menu">
              <img src={hamburgerIcon} alt="menu" />
            </button>
          )
        ) : (
          <Navbar windowWidth={windowWidth} />
        )}
      </header>
    </>
  );
}

export default Header;
