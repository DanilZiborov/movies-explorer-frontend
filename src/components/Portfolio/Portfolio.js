import React from "react";

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__item">
        <a className="portfolio__link" href="#">Статичный сайт</a>
        <p className="portfolio__arrow">↗</p>
      </div>
      <div className="portfolio__item">
        <a className="portfolio__link" href="#">Адаптивный сайт</a>
        <p className="portfolio__arrow">↗</p>
      </div>
      <div className="portfolio__item">
        <a className="portfolio__link" href="#">Одностраничное приложение</a>
        <p className="portfolio__arrow">↗</p>
      </div>
    </section>
  )
}

export default Portfolio;
