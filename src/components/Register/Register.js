import React from "react";
import Login from "../Login/Login";

function Register({data, onSubmit}) {

  const [formValue, setFormValue] = React.useState({email: '', password: '', username: ''});

  function handleChange(e) {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    console.log(formValue);
  }

  return (
    <Login data={data} onSubmit={onSubmit} >
      <div className="user-form__row">
        <label htmlFor="username" className="user-form__label">Имя</label>
        <input className="user-form__input" type="text " name="username" id="username" onChange={handleChange} placeholder="Введите имя" required maxLength={30}></input>
        <p className="user-form__error-message user-form__error-message_place_input">Здесь будут ошибки валидатора</p>
      </div>
    </Login>
  )
}

export default Register;
