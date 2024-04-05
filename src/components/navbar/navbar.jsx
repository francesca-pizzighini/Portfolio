import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar({ isEnglish }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/home"}>
            {isEnglish ? <p>Home</p> : <p>Homepage</p>}
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skills"}>
            {isEnglish ? <p>Skills</p> : <p>Competenze</p>}
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>
            {isEnglish ? <p>Projects</p> : <p>Progetti</p>}
            <div className="line"></div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contacts"}>
            {isEnglish ? <p>Contacts</p> : <p>Contatti</p>}
            <div className="line"></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
