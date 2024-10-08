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
              <button className="nav-button nav-button--selected">About</button>
            </li>
            <li className="nav-item">
              <button className="nav-button">Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-button">Contact</button>
            </li>
            <li className="nav-item">
              <button className="nav-button">Images</button>
            </li>
          </ul>
          <div className="right-nav-icon">|</div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
