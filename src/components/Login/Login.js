import React from "react";

function Login({data}) {
  return (
    <section className="login">
      <div className="logo logo_place_login"></div>
      <h2 className="login__title">{data.title}</h2>
      <form className="login__form">
        <div className="login__form-row">
          <label for="email" className="login__form-label">E-mail</label>
          <input className="login__email" type="email" name="email" id="email"></input>
        </div>
        <div className="login__form-row">
          <label className="login__form-label" for="password">Пароль</label>
          <input className="login__password" type="password" name="password" id="password"></input>
        </div>
      </form>

    </section>

  )
}

export default Login;
