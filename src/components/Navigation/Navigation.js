import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return(
    <nav className="navigation">
      <Link to={'/'} className="navigation__link">Главная</Link>
      <Link to={'/movies'} className="navigation__link navigation__link_active">Фильмы</Link>
      <Link to={'/saved-movies'} className="navigation__link">Сохранённые фильмы</Link>
      <Link to={'/profile'} className="navigation__link"><div className="navigation__profile-icon"></div></Link>
    </nav>
  )
}

export default Navigation;
