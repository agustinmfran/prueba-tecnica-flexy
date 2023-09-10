import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-right-container">
          <a href="https://www.flexy.com.ar/">
            <img className="logo" src="/images/logo.png" alt="logo"></img>
          </a>
          <div className="menu-container">
            <img
              id="menu"
              className="menu"
              src="/images/menu.svg"
              alt="menu"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
