import React from "react";

import { Link} from "react-router-dom";


function Login({ data, children, onSubmit }) {

  const [formValue, setFormValue] = React.useState({ email: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    console.log(formValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }


  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/" className="logo logo_place_login"/>
        <h2 className="login__title">{data.title}</h2>
        <form className="user-form" action="#" onSubmit={handleSubmit} noValidate>
          {children}
          <div className="user-form__row">
            <label htmlFor="email" className="user-form__label">E-mail</label>
            <input className="user-form__input" type="email" name="email" id="email" onChange={handleChange} placeholder="Введите email" required></input>
            <p className="user-form__error-message user-form__error-message_place_input">Здесь будут ошибки валидатора</p>
          </div>
          <div className="user-form__row">
            <label className="user-form__label" htmlFor="password">Пароль</label>
            <input className="user-form__input" type="password" name="password" id="password" onChange={handleChange} placeholder="Введите пароль" minLength={8} maxLength={30} required></input>
            <p className="user-form__error-message user-form__error-message_place_input">Здесь будут ошибки валидатора</p>
          </div>
            <p className="user-form__error-message user-form__error-message_place_submit" id="server-error">Здесь будут ошибки сервера</p>
            <button className="user-form__submit-button" type="submit">{data.buttonText}</button>
            <p className="user-form__button-subtitle">{data.buttonSubtitle} <Link className="user-form__button-subtitle-link" to={data.buttonSubtitleLink}>{data.buttonSubtitleLinkText}</Link></p>
        </form>
      </div>

    </section>

  )
}

export default Login;
