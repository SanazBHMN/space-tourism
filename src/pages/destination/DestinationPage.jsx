import { useParams } from "react-router-dom";
import DestinationTemplate from "../../components/templates/DestinationTemplate";

import data from "../../../utils/data.json";

function DestinationPage() {
  const { destinations } = data;
  const { name } = useParams();
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === name.toLowerCase()
  );

  console.log(destination);

  return destination ? <DestinationTemplate destination={destination} /> : null;
}

export default DestinationPage;