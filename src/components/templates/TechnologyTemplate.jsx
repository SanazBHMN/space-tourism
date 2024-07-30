import useSize from "../../hooks/useSize";

function TechnologyTemplate({ technology }) {
  const { name, images, description } = technology;
  const [windowWidth, windowHeight] = useSize();

  return (
    <main className="content-container">
      <div className="content">
        <h1 className="content-title">{name}</h1>
        <p className="content--desc">{description}</p>
      </div>
      <div
        className={`content-img bg-portrait`}
        style={{
          backgroundImage: `url(${
            windowWidth < 768 ? images.portrait : images.landscape
          })`,
          width: "300px",
          height: "300px",
        }}
      ></div>
    </main>
  );
}

export default TechnologyTemplate;
