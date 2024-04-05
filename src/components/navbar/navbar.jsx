import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/home"}>
            <p>Home</p>
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skills"}>
            <p>Skills</p>
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>
            <p>Projects</p>
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contacts"}>
            <p>Contacts</p>
            <div className="line"></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
