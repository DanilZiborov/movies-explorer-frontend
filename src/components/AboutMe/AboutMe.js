import React from "react";

import aboutMePhotoPath from "../../images/about-me-photo.png"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <img src={aboutMePhotoPath} className="about-me__photo" alt="Фотография студента" />
        <div className="about-me__info">
          <p className="about-me__name">Данил</p>
          <p className="about-me__job">Веб-разработчик, 26 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__link" href="https://github.com/DanilZiborov">Github</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
