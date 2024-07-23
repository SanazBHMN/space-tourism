import { Link, Outlet } from "react-router-dom";

function TechnologyPage() {
  return (
    <div>
      <h1>03 SPACE LAUNCH 101</h1>
      <ul>
        <li>
          <Link to="launch-vehicle">launch-vehicle</Link>
        </li>
        <li>
          <Link to="spaceport">spaceport</Link>
        </li>
        <li>
          <Link to="space-capsule">space-capsule</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default TechnologyPage;
