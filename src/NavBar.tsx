import { NavLink } from "react-router-dom";
import FunnyManImage from "../assets/img/funny-man.png";

const NavBar = () => {
  return (
    <>
      <img
        className="test-image"
        alt="site-logo-code-chef"
        src={FunnyManImage}
        width={300}
        height={271}
      />
      <header>
        <nav>
          <div className="left-nav-icon">|</div>
          <ul className="nav-ul">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-button nav-button--selected" : "nav-button"
                }
                to="/"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-button nav-button--selected" : "nav-button"
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-button nav-button--selected" : "nav-button"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-button nav-button--selected" : "nav-button"
                }
                to="/images"
              >
                Images
              </NavLink>
            </li>
          </ul>
          <div className="right-nav-icon">|</div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
