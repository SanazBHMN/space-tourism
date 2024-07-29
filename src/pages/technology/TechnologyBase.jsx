import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";
import Heading from "../../components/Heading";

// import statics
import "./technology-page.scss";
import { technologies } from "../../../utils/data.json";

function TechnologyBase() {
  const TITLE = "03 SPACE LAUNCH 101";

  return (
    <div className="technology-container">
      <Heading title={TITLE} />
      <div className="technology--title">
        <InnerNavbar innerLinks={technologies} componentName={"technology"} />
        <Outlet />
      </div>
    </div>
  );
}

export default TechnologyBase;
