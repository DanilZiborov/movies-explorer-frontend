import React from "react";
import { Link} from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Login({onSubmit, errorMessage}) {
  const { values, errors, isInputValid, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/" className="logo logo_place_login"/>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="user-form" action="#" noValidate onSubmit={handleSubmit}>
          <div className="user-form__row">
            <label htmlFor="email" className="user-form__label">E-mail</label>
            <input
              className={isInputValid.email === undefined || isInputValid.email ? "user-form__input" : "user-form__input user-form__input_invalid"}
              type="email"
              name="email"
              id="email"
              value={values.email ? values.email : ''}
              placeholder="Введите email"
              required
              onChange={handleChange}>
            </input>
            <p className="user-form__error-message user-form__error-message_place_input">{errors.email}</p>
          </div>
          <div className="user-form__row">
            <label className="user-form__label" htmlFor="password">Пароль</label>
            <input
              className={isInputValid.password === undefined || isInputValid.password ? "user-form__input" : "user-form__input user-form__input_invalid" }
              type="password"
              name="password"
              id="password"
              value={values.password ? values.password : ''}
              placeholder="Введите пароль"
              minLength={8}
              maxLength={30}
              required
              onChange={handleChange}>
            </input>
          <p className="user-form__error-message user-form__error-message_place_input">{errors.password}</p>
          </div>
            {errorMessage === '' ? null : <p className="user-form__error-message user-form__error-message_place_submit">{errorMessage}</p>}
            <button className="user-form__submit-button" type="submit" disabled={!isValid}>Войти</button>
            <p className="user-form__button-subtitle">Ещё не зарегистрированы? <Link className="user-form__button-subtitle-link" to='/signup'>Регистрация</Link></p>
        </form>
      </div>

    </section>

  )
}

export default Login;
