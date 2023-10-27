import React from "react";
import Login from "../Login/Login";

function Register({data, onSubmit, isRegisterSuccess}) {

  const [formValue, setFormValue] = React.useState({email: '', password: '', name: ''});

  function handleChange(e) {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit() {
    onSubmit(formValue);
  }

  return (
    <Login data={data} onSubmit={handleSubmit} isRegisterSuccess={isRegisterSuccess} onChange={handleChange}>
      <div className="user-form__row">
        <label htmlFor="username" className="user-form__label">Имя</label>
        <input className="user-form__input" type="text " name="name" id="username" onChange={handleChange} placeholder="Введите имя" required maxLength={30}></input>
        <p className="user-form__error-message user-form__error-message_place_input">Здесь будут ошибки валидатора</p>
      </div>
    </Login>
  )
}

export default Register;
