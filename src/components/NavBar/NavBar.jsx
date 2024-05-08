import Logo from "../../images/LogoWiF.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <img src={Logo} />
      </div>
      <div className="navbar__item">About Us</div>
      <div className="navbar__item">Projects</div>
      <div className="navbar__item">Apply</div>
    </header>
  );
}
