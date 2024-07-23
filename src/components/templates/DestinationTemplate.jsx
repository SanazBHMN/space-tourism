function DestinationTemplate({ destination }) {
  const { name, images, description, distance, travel } = destination;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <h3>AVG. DISTANCE</h3>
        <h2>{distance}</h2>
      </div>
      <div>
        <h3>EST. TRAVEL TIME</h3>
        <h2>{travel}</h2>
      </div>
    </div>
  );
}

export default DestinationTemplate;
