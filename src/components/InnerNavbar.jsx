import { Link } from "react-router-dom";

function InnerNavbar({ innerLinks, title }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {innerLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.name.replace(/ +/g, "-").toLowerCase()}>
              {link.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default InnerNavbar;
