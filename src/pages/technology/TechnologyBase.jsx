import { Link, Outlet } from "react-router-dom";

import { technologies } from "../../../utils/data.json";
import InnerNavbar from "../../components/InnerNavbar";

function TechnologyBase() {
  const TITLE = "03 SPACE LAUNCH 101";

  return (
    <div>
      <InnerNavbar innerLinks={technologies} title={TITLE} />
      <Outlet />
    </div>
  );
}

export default TechnologyBase;
