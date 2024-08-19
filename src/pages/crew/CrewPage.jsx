import { useParams } from "react-router-dom";

// import statics
import { crews } from "../../../utils/data.json";

function CrewPage() {
  const { name } = useParams();
  const crew = crews.find(
    (crew) => crew.name.replace(/ +/g, "-").toLowerCase() === name
  );

  return (
    <div className="content-container">
      <div className="content">
        <h3 className="content__role">{crew.role}</h3>
        <h1 className="content__name">{crew.name}</h1>
        <p className="content__bio">{crew.bio}</p>
      </div>
      <div className="content-img">
        <img src={crew.images.webp} alt={crew.name} />
      </div>
    </div>
  );
}

export default CrewPage;
