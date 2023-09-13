import React from "react";
import { Link } from "react-router-dom";

  function Header({isLoggedIn}) {


    return (
      <header className="header">
        <div className="header__logo"></div>
        {!isLoggedIn &&  <ul className="header__login">
          <li>
            <Link to="/signup" className="header__signup-link">Регистрация</Link>
          </li>
          <li>
            <Link to="/signin"className="header__signin-link">Войти</Link>
          </li>
        </ul>}
        {isLoggedIn && <button className="header__nav-button"></button>}
      </header>
    )
  }

  export default Header;
