import { Outlet } from "react-router-dom";

function DiscoverLayout() {
  return (
    <div className="discover-layout" style={{ backgroundColor: "blue" }}>
      <div className="container">
        <h1 className="page-title">
          <span>00</span>
          PAGE TITLE
        </h1>
        <div className="content">
          <div className="content--left">
            <img src="" alt="image" className="content--left__img" />
          </div>
          <div className="content--right">
            {/* inner navbar */}
            <div className="content--right__text">
              <h1 className="title">MARS</h1>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                reiciendis facilis adipisci a vitae labore?
              </p>
              <div className="details"></div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default DiscoverLayout;
