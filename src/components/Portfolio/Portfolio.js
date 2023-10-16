import React from "react";

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__link" href="https://mestoprojectdvz.nomoreparties.co/" target="blank" >
        <p className="portfolio__item">Статичный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </a>
      <a className="portfolio__link" href="https://mestoprojectdvz.nomoreparties.co/" target="blank">
        <p className="portfolio__item">Адаптивный сайт</p>
        <p className="portfolio__arrow">↗</p>
      </a>
      <a className="portfolio__link" href="https://mestoprojectdvz.nomoreparties.co/" target="blank">
        <p className="portfolio__item">Одностраничное приложение</p>
        <p className="portfolio__arrow">↗</p>
      </a>
    </section>
  )
}

export default Portfolio;
