import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/inner-navbar/InnerNavbar";
import Heading from "../../components/heading/Heading";

// import statics
import "./technology-page.scss";
import { technologies } from "../../../utils/data.json";

function TechnologyBase() {
  const TITLE = "03 SPACE LAUNCH 101";

  return (
    <div className="technology-container">
      <Heading title={TITLE} />
      <div className="container">
        <Outlet />
        <InnerNavbar innerLinks={technologies} componentName={"technology"} />
      </div>
    </div>
  );
}

export default TechnologyBase;
