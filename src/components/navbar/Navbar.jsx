import { NavLink } from "react-router-dom";

import "./navbar.scss";

function Navbar({ windowWidth }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">{windowWidth > 1024 && "00"} Home</NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            {windowWidth > 1024 && "01"} Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">{windowWidth > 1024 && "02"} Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            {windowWidth > 1024 && "03"} Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
