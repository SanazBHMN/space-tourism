import { Link, Outlet } from "react-router-dom";

function CrewPage() {
  return (
    <div>
      <h1>02 MEET YOUR CREW</h1>
      <ul>
        <li>
          <Link to="douglas-hurley">douglas-hurley</Link>
        </li>
        <li>
          <Link to="mark-shuttleworth">mark-shuttleworth</Link>
        </li>
        <li>
          <Link to="victor-glover">victor-glover</Link>
        </li>
        <li>
          <Link to="anousheh-ansari">anousheh-ansari</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default CrewPage;
