import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import components
import TechnologyTemplate from "../../components/templates/TechnologyTemplate";

function TechnologyPage() {
  const [technologies, setTechnologies] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/technologies")
      .then((response) => setTechnologies(response.data));
  }, []);

  const technology = technologies.find(
    (tech) => tech.name.replace(/ +/g, "-").toLowerCase() === name
  );
  return technology ? <TechnologyTemplate technology={technology} /> : null;
}

export default TechnologyPage;
