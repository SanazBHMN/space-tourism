function DestinationTemplate({ destination }) {
  const { name, images, description, distance, travel } = destination;

  return (
    <main className="content-container">
      <div className="content-img">
        <img src={images.webp} alt={name} />
      </div>
      <div className="content">
        <h1 className="content__title">{name}</h1>
        <p className="content__description">{description}</p>
        <div className="content--details">
          <div className="content--details__left">
            <h3 className="content--details__title">AVG. DISTANCE</h3>
            <h2 className="content--details__data">{distance}</h2>
          </div>
          <div className="content--details__right">
            <h3 className="content--details__title">EST. TRAVEL TIME</h3>
            <h2 className="content--details__data">{travel}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DestinationTemplate;
