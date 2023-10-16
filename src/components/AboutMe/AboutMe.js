import React from "react";

import aboutMePhotoPath from "../../images/about-me-photo.png"

function AboutMe() {
  return (
    <section className="about-me" id='about-me'>
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <img src={aboutMePhotoPath} className="about-me__photo" alt="Фотография студента" />
        <div className="about-me__info">
          <p className="about-me__name">Данил</p>
          <p className="about-me__job">Веб-разработчик, 26 лет</p>
          <p className="about-me__text">Я живу в городе Минеральные Воды в Ставропольском крае. Закончил бакалавриат и магистратуру по гуманитарным направлениям
            и по специальности не работал. Зато удалось поработать в службе поддержки Яндекса, в страховой компании и даже менеджером в сфере арбитража трафика. Помимо работы мне нравится кататься на горном велосипеде,
            ходить в походы, готовить всякие вкусные штуки, играть с друзьями в настолки. Год назад я решил связать свою жизнь с программированием и стал студентом Практикума. </p>
          <a className="about-me__link" href="https://github.com/DanilZiborov">Github</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
