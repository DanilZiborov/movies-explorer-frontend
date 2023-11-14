import React from "react";

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return(
    <section className="not-found">
      <p className="not-found__error-code">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__back-button" onClick={goBack}>Назад</button>
    </section>
  )
}

export default NotFound;
