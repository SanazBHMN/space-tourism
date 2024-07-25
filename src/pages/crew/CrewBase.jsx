import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";

// import statics
import "./crew-page.scss";
import { crews } from "../../../utils/data.json";

function CrewBase() {
  const TITLE = "02 MEET YOUR CREW";

  return (
    <div className="crew-container">
      <InnerNavbar innerLinks={crews} title={TITLE} />
      <Outlet />
    </div>
  );
}

export default CrewBase;
