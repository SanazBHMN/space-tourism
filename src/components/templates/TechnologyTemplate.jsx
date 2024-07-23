function TechnologyTemplate({ technology }) {
  const { name, images, description } = technology;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TechnologyTemplate;
