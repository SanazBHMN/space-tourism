import useSize from "../../hooks/useSize";

function TechnologyTemplate({ technology }) {
  const { name, images, description } = technology;
  const [windowWidth, windowHeight] = useSize();

  return (
    <main className="content-container">
      <div className="content">
        <div>
          <h5 className="content-heading">The technology...</h5>
          <h1 className="content-title">{name}</h1>
          <p className="content-desc">{description}</p>
        </div>
        <div className="content-img__container">
          <div
            className="content-img__img"
            style={{
              backgroundImage: `url(${
                windowWidth < 768 ? images.landscape : images.portrait
              })`,
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}

export default TechnologyTemplate;
