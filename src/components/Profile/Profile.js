import React from "react";


function Profile({onSignout}) {

  const username = 'Даня';

  const profileFormRef = React.useRef(null);

  const [formValue, setFormValue] = React.useState({ email: '', username: '' });
  const [isEditorModeActive, setIsEditorModeActive] = React.useState(false);

  function enableEditorMode() {
    setIsEditorModeActive(true);
    profileFormRef.current.username.focus();
    console.log(profileFormRef.current.username);
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
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {username}!</h2>
      <form className="profile-form" action="#" onSubmit={handleSubmit} ref={profileFormRef} noValidate>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="username" className="profile-form__label">Имя</label>
            <input className="profile-form__input" type="text " name="username" id="username" onChange={handleChange} placeholder={'Даня'} readOnly={isEditorModeActive ? false : true} ></input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">Здесь будут ошибки валидатора</p>
        </div>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="email" className="profile-form__label">Почта</label>
            <input className="profile-form__input" type="email" name="email" id="email" onChange={handleChange} placeholder={'danilz081997@gmail.com'} readOnly={isEditorModeActive ? false : true}></input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">Здесь будут ошибки валидатора</p>
        </div>
        <p className="profile-form__error-message profile-form__error-message_place_submit" id="server-error">Здесь будут ошибки сервера</p>
        {!isEditorModeActive && <button className="profile-form__edit-button" type="button" onClick={enableEditorMode}>Редактировать</button>}
        {!isEditorModeActive && <button className="profile-form__logout-button" type="button" onClick={onSignout}>Выйти из аккаунта</button>}
        {isEditorModeActive && <button className="profile-form__submit-button" type="submit" onClick={handleSubmit}>Сохранить</button>}

      </form>

    </section>
  )
}

export default Profile;
