import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// import components
import Heading from "../../components/heading/Heading";
import InnerLink from "../../components/inner-navbar/InnerLink";

// import statics
import { destinations } from "../../../utils/data.json";

// import styles
import "./destination-page.scss";

function DestinationBase() {
  const title = {
    pre: "01",
    text: "PICK YOUR DESTINATION",
  };

  return (
    <div className="destination-container">
      <div className="container">
        <Heading title={title} />
        <ul className="destination--innerNav">
          {destinations.map((destination) => (
            <Fragment key={destination.name}>
              <InnerLink link={destination.name} pageName="destination" />
            </Fragment>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default DestinationBase;
