import { NavLink } from "react-router-dom";
import Logo from "../../images/LogoWiF.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <img src={Logo} />
      </div>
      <div className="navbar__item">
        <NavLink to="/about" style={{ textDecoration: "none", color: "white" }}>
          About Us
        </NavLink>
      </div>
      <div className="navbar__item">
        <NavLink
          to="/projects"
          style={{ textDecoration: "none", color: "white" }}
        >
          Projects
        </NavLink>
      </div>
      <div className="navbar__item">
        <NavLink to="/apply" style={{ textDecoration: "none", color: "white" }}>
          Apply
        </NavLink>
      </div>
    </header>
  );
}
