import { useParams } from "react-router-dom";
import TechnologyTemplate from "../../components/templates/TechnologyTemplate";

import data from "../../../utils/data.json";

function TechnologyPage() {
  const { name } = useParams();
  const { technologies } = data;

  const technology = technologies.find(
    (tech) => tech.name.replace(/ +/g, "-").toLowerCase() === name
  );
  return technology ? <TechnologyTemplate technology={technology} /> : null;
}

export default TechnologyPage;
