import { NavLink } from "react-router-dom";

function InnerLink({ link }) {
  // console.log(link);
  return (
    <li>
      <NavLink to={link.toLowerCase()}>{link}</NavLink>
    </li>
  );
}

export default InnerLink;
