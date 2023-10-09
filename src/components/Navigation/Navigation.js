import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation({ closePopup }) {

  const location = useLocation();
  return (
    <nav className="navigation">
      <div className="navigation__links-wrapper">
        <Link to={'/'} onClick={closePopup} className={location.pathname === '/' ? 'navigation__link navigation__link_active' : 'navigation__link'}>
          <span className="navigation__link-text">Главная</span>
          <div className="logo logo_place_navigation"></div>
        </Link>
        <Link to={'/movies'} onClick={closePopup} className={location.pathname === '/movies' ? 'navigation__link navigation__link_active' : 'navigation__link'}>Фильмы</Link>
        <Link to={'/saved-movies'} onClick={closePopup} className={location.pathname === '/saved-movies' ? 'navigation__link navigation__link_active' : 'navigation__link'}>Сохранённые фильмы</Link>
      </div>
      <Link to={'/profile'} onClick={closePopup} className="navigation__link"><div className="navigation__profile-icon"></div></Link>
    </nav>
  )
}

export default Navigation;
