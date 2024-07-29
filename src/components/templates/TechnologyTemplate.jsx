function TechnologyTemplate({ technology }) {
  const { name, images, description } = technology;
  return (
    <main className="content-container">
      <div className="content">
        <h1 className="content-title">{name}</h1>
        <p className="content--desc">{description}</p>
      </div>
      <div
        className={`content-img bg-${name}`}
        style={{
          backgroundImage: `url(${images.portrait})`,
          width: "300px",
          height: "300px",
        }}
      >
        {/* <img src={images.portrait} alt={name} /> */}
      </div>
    </main>
  );
}

export default TechnologyTemplate;
