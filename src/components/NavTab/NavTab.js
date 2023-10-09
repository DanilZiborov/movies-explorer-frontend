import React from "react";

function NavTab() {
  return(
    <section className="nav-tab">
      <ul className="nav-tab__wrapper">
        <li><a href="#about-project" className="nav-tab__link">О проекте</a></li>
        <li><a href="#techs" className="nav-tab__link">Технологии</a></li>
        <li><a href="#about-me" className="nav-tab__link">Студент</a></li>
      </ul>
    </section>
  )
}

export default NavTab;
