import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return(
    <nav className="navigation">
      <Link to={'/gg'} className="navigation__link">Главная</Link>
      <Link to={'/gg'} className="navigation__link">Фильмы</Link>
      <Link to={'/gg'} className="navigation__link">Сохранённые фильмы</Link>
      <Link to={'/gg'} className="navigation__link">Аккаунт</Link>
    </nav>
  )
}

export default Navigation;
