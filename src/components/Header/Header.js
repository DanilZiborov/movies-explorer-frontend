import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

  function Header({isLoggedIn, onNavMenuClick}) {

    const location = useLocation();

    return (
      <header className= {location.pathname === '/' ? 'header header_bg-color-main' : 'header'}>
        <Link to="/" className="logo logo_place_header" />
        {!isLoggedIn &&  <ul className="header__login">
          <li>
            <Link to="/signup" className="header__signup-link">Регистрация</Link>
          </li>
          <li>
            <Link to="/signin"className="header__signin-link">Войти</Link>
          </li>
        </ul>}
        {isLoggedIn && <button className="header__nav-button" onClick={onNavMenuClick}></button>}
        {isLoggedIn && <div className="header__nav-wrapper"><Navigation/></div>}
      </header>
    )
  }

  export default Header;
