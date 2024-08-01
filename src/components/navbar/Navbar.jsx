import { NavLink } from "react-router-dom";

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
    </nav>
  );
}

export default Navbar;
