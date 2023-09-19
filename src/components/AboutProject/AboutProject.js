import React from "react";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <article className="about-project__article">
        <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__article-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </article>
      <article className="about-project__article">
        <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__article-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
      <div className="about-project__scheme">
        <p className="about-project__scheme-item about-project__scheme-item_type_week">1 неделя</p>
        <p className="about-project__scheme-item about-project__scheme-item_type_week">4 недели</p>
        <p className="about-project__scheme-item about-project__scheme-item_type_subject">Back-end</p>
        <p className="about-project__scheme-item about-project__scheme-item_type_subject">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
