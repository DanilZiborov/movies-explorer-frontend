import React from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({onSignOut, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);

  const profileFormRef = React.useRef(null);

  const [formValue, setFormValue] = React.useState({ email: '', name: '' });
  const [isEditorModeActive, setIsEditorModeActive] = React.useState(false);

  React.useEffect(() => {
    setFormValue({email: currentUser.email, name:currentUser.name})
  }, [currentUser]);

  function enableEditorMode() {
    setIsEditorModeActive(true);
    profileFormRef.current.name.focus();
  }

  function disableEditorMode() {
    setIsEditorModeActive(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

  }

  function handleSubmit(e) {
    e.preventDefault();
    disableEditorMode();
    onUpdateUser(formValue);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {formValue.name}!</h2>
      <form className="profile-form" action="#" onSubmit={handleSubmit} ref={profileFormRef} noValidate>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="name" className="profile-form__label">Имя</label>
            <input className="profile-form__input" type="text" name="name" id="name" onChange={handleChange} readOnly={isEditorModeActive ? false : true} maxLength={30} required value={formValue.name}></input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">Здесь будут ошибки валидатора</p>
        </div>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="email" className="profile-form__label">E-mail</label>
            <input className="profile-form__input" type="email" name="email" id="email" onChange={handleChange} readOnly={isEditorModeActive ? false : true} required value={formValue.email}></input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">Здесь будут ошибки валидатора</p>
        </div>
        <p className="profile-form__error-message profile-form__error-message_place_submit" id="server-error">Здесь будут ошибки сервера</p>
        {!isEditorModeActive && <button className="profile-form__edit-button" type="button" onClick={enableEditorMode}>Редактировать</button>}
        {!isEditorModeActive && <button className="profile-form__logout-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>}
        {isEditorModeActive && <button className="profile-form__submit-button" type="submit" onClick={handleSubmit}>Сохранить</button>}

      </form>

    </section>
  )
}

export default Profile;
