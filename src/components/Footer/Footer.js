import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__project-info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <ul className="footer__links-list">
          <li><a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/DanilZiborov/movies-explorer-frontend" className="footer__link">Github</a></li>
        </ul>
        <p className="footer__copyright">©{new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}

export default Footer;
