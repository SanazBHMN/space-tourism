import { useParams } from "react-router-dom";
import DestinationTemplate from "../../components/templates/DestinationTemplate";

// import statics
import data from "../../../utils/data.json";

function DestinationPage() {
  const { destinations } = data;
  const { name } = useParams();
  const destination = destinations.find(
    (dest) => dest.name.toLowerCase() === name.toLowerCase()
  );

  return destination ? <DestinationTemplate destination={destination} /> : null;
}

export default DestinationPage;
