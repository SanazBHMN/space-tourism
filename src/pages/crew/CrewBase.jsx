import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// import components
import Heading from "../../components/heading/Heading";
import InnerLink from "../../components/inner-navbar/InnerLink";

// import statics
import { crews } from "../../../utils/data.json";

// import styles
import "./crew-page.scss";

function CrewBase() {
  const title = {
    pre: "02",
    text: "MEET YOUR CREW",
  };

  return (
    <div className="crew-container">
      <div className="container">
        <Heading title={title} />
        <Outlet />
        <ul className="crew--innerNav">
          {crews.map((crew) => (
            <Fragment key={crew.name}>
              <InnerLink
                link={crew.name.replace(/ +/g, "-").toLowerCase()}
                pageName="crew"
              />
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CrewBase;
