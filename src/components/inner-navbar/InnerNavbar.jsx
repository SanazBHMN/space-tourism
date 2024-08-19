import { NavLink } from "react-router-dom";

// static imports
// import "./inner-navbar.scss";

function InnerNavbar({ innerLinks, componentName }) {
  return (
    <>
      <ul className={`innerNav nav--${componentName}`}>
        {innerLinks.map((link, index) => (
          <li key={index} className={`innerNav__item item--${componentName}`}>
            <NavLink to={link.name.replace(/ +/g, "-").toLowerCase()}>
              {componentName === "destination"
                ? link.name.toUpperCase()
                : componentName === "crew"
                ? "●"
                : index + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default InnerNavbar;
