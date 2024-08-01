import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/inner-navbar/InnerNavbar";
import Heading from "../../components/heading/Heading";

// import statics
import "./destination-page.scss";
import { destinations } from "../../../utils/data.json";

function DestinationBase() {
  const TITLE = "01 PICK YOUR DESTINATION";

  return (
    <div className="destination-container">
      <div className="container">
        <Heading title={TITLE} />
        <InnerNavbar innerLinks={destinations} componentName={"destination"} />
        <Outlet />
      </div>
    </div>
  );
}

export default DestinationBase;
