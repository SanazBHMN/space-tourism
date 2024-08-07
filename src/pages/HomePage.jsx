// static imports
import { useNavigate } from "react-router-dom";
import "./home-page.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="content">
        <h1 className="content--header">
          <span className="content--header__text">
            So, you want to travel to
          </span>
          <br />
          <br />
          <br />
          <span className="content--header__word">Space</span>
        </h1>
        <p className="content__paragraph">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button onClick={() => navigate("/destination")} className="cta">
        Explore
      </button>
    </div>
  );
}

export default HomePage;
