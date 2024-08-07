// import statics
import "./heading.scss";

function Heading({ title }) {
  return (
    <h1 className="headline">
      <span>{title.pre}</span>
      {title.text}
    </h1>
  );
}

export default Heading;
