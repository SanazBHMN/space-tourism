import { Link } from "react-router-dom";

// static imports
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";
import logo from "../assets/icons/logo.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">00 Home</Link>
        </li>
        <li>
          <Link to="/destination">01 Destination</Link>
        </li>
        <li>
          <Link to="/crew">02 Crew</Link>
        </li>
        <li>
          <Link to="/technology">03 Technology</Link>
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
