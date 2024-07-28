import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";
import Heading from "../../components/Heading";

// import statics
import "./crew-page.scss";
import { crews } from "../../../utils/data.json";

function CrewBase() {
  const TITLE = "02 MEET YOUR CREW";

  return (
    <div className="crew-container">
      <Heading title={TITLE} />
      <Outlet />
      <InnerNavbar innerLinks={crews} componentName={"crew"} />
    </div>
  );
}

export default CrewBase;
