import { Link, Outlet } from "react-router-dom";

function DestinationPage() {
  return (
    <div>
      <h1>01 PICK YOUR DESTINATION</h1>
      <ul>
        <li>
          <Link to="moon">MOON</Link>
        </li>
        <li>
          <Link to="mars">MARS</Link>
        </li>
        <li>
          <Link to="europa">EUROPA</Link>
        </li>
        <li>
          <Link to="titan">TITAN</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DestinationPage;
