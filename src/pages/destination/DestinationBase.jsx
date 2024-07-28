import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";
import Heading from "../../components/Heading";

// import statics
import "./destination-page.scss";
import { destinations } from "../../../utils/data.json";

function DestinationBase() {
  const TITLE = "01 PICK YOUR DESTINATION";

  return (
    <div className="destination-container">
      <Heading title={TITLE} />
      <InnerNavbar innerLinks={destinations} />
      <Outlet />
    </div>
  );
}

export default DestinationBase;
