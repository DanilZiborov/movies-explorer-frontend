import React from "react";
import { Link, useLocation } from "react-router-dom";

  function Header({isLoggedIn, onNavMenuClick}) {

    const location = useLocation();
    
    return (
      <header className= {location.pathname === '/' ? 'header header_main' : 'header'}>
        <div className="logo logo_place_header"></div>
        {!isLoggedIn &&  <ul className="header__login">
          <li>
            <Link to="/signup" className="header__signup-link">Регистрация</Link>
          </li>
          <li>
            <Link to="/signin"className="header__signin-link">Войти</Link>
          </li>
        </ul>}
        {isLoggedIn && <button className="header__nav-button" onClick={onNavMenuClick}></button>}
      </header>
    )
  }

  export default Header;
