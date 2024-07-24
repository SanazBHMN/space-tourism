import { Outlet } from "react-router-dom";
import InnerNavbar from "../../components/InnerNavbar";

import { destinations } from "../../../utils/data.json";

function DestinationBase() {
  const TITLE = "01 PICK YOUR DESTINATION";

  return (
    <div>
      <InnerNavbar innerLinks={destinations} title={TITLE} />
      <Outlet />
    </div>
  );
}

export default DestinationBase;
