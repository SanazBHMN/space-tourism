import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";

// import statics
import "./technology-page.scss";
import { technologies } from "../../../utils/data.json";

function TechnologyBase() {
  const TITLE = "03 SPACE LAUNCH 101";

  return (
    <div className="technology-container">
      <InnerNavbar innerLinks={technologies} title={TITLE} />
      <Outlet />
    </div>
  );
}

export default TechnologyBase;
