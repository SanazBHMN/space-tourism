function CrewTemplate({ crew }) {
  const { name, bio, images, role } = crew;
  return (
    <main className="content-container">
      <div className="content">
        <h3 className="content__role">{role}</h3>
        <h1 className="content__name">{name}</h1>
        <p className="content__bio">{bio}</p>
      </div>
      <div className="content-img">
        <img src={images.webp} alt={name} />
      </div>
    </main>
  );
}

export default CrewTemplate;
