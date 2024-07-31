import { Link, NavLink } from "react-router-dom";

// static imports
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";
import logo from "../assets/icons/logo.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">00 Home</NavLink>
        </li>
        <li>
          <NavLink to="/destination">01 Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 Technology</NavLink>
        </li>
      </ul>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar--line"></div>
      <div className="menu">
        <img src={hamburgerIcon} />
      </div>
    </nav>
  );
}

export default Navbar;
