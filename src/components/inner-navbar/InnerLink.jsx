import { NavLink } from "react-router-dom";

function InnerLink({ link, pageName }) {
  // console.log(pageName, link);
  return (
    <li className="innerNav__item">
      <NavLink to={link.toLowerCase()}>
        {pageName === "destination" ? link : "crew" ? "●" : ""}
      </NavLink>
    </li>
  );
}

export default InnerLink;
