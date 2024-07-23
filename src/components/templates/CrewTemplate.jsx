function CrewTemplate({ crew }) {
  const { name, bio, images, role } = crew;
  return (
    <div>
      <h3>{role}</h3>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
}

export default CrewTemplate;
