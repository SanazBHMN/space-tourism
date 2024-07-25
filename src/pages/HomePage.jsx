// static imports
import "./home-page.scss";

function HomePage() {
  return (
    <div className="homepage-container">
      <main>
        <section className="content">
          <h1 className="content__header">
            So, you want to travel to
            <br />
            <span>Space</span>
          </h1>
          <p className="content__paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <div className="cta">Explore</div>
      </main>
    </div>
  );
}

export default HomePage;
