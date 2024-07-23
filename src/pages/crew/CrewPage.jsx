import { useParams } from "react-router-dom";
import data from "../../../utils/data.json";
import CrewTemplate from "../../components/templates/CrewTemplate";

function CrewPage() {
  const { crews } = data;
  const { name } = useParams();
  console.log(crews);

  const crew = crews.find(
    (crew) => crew.name.replace(/ +/g, "-").toLowerCase() === name
  );
  return crew ? <CrewTemplate crew={crew} /> : null;
}

export default CrewPage;
