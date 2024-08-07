import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DestinationPage() {
  const [destinations, setDestinations] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/destinations")
      .then((response) => setDestinations(response.data));
  }, []);

  const destination = destinations?.find(
    (destination) => destination.name.toLowerCase() === name.toLowerCase()
  );
  return (
    <div className="content-container">
      <div className="content-img">
        <img src={destination?.images.webp} alt={destination?.name} />
      </div>
      <div className="content">
        <h1 className="content__title">{destination?.name}</h1>
        <p className="content__description">{destination?.description}</p>
        <div className="content--details">
          <div className="content--details__left">
            <h3 className="content--details__title">AVG. DISTANCE</h3>
            <h2 className="content--details__data">{destination?.distance}</h2>
          </div>
          <div className="content--details__right">
            <h3 className="content--details__title">EST. TRAVEL TIME</h3>
            <h2 className="content--details__data">{destination?.travel}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
