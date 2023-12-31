import React from "react";

function Techs() {

  return (
    <section className="techs" id='techs'>
      <h2 className="techs__title">Технологии</h2>
      <p className="techs__subtitle">7 технологий</p>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__grid">
        <p className="techs__grid-item">HTML</p>
        <p className="techs__grid-item">CSS</p>
        <p className="techs__grid-item">JS</p>
        <p className="techs__grid-item">React</p>
        <p className="techs__grid-item">Git</p>
        <p className="techs__grid-item">Express.js</p>
        <p className="techs__grid-item">mongoDB</p>

      </div>
    </section>
  )
}

export default Techs;


