import React from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormValidation";

function Profile({ onSignOut, onUpdateUser, isUpdateSuccess, isUpdateUserSuccess, errorMessage }) {

  const currentUser = React.useContext(CurrentUserContext);
  const profileFormRef = React.useRef(null);

  const { values, errors, isInputValid, isValid, handleChange, setValue } = useFormWithValidation();
  const [isEditorModeActive, setIsEditorModeActive] = React.useState(false);
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = React.useState(false);

  React.useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
  }, [currentUser, setValue]);

  React.useEffect(() => {
    checkSubmitButtonEnabled();
  }, [values]);

  function enableEditorMode() {
    setIsEditorModeActive(true);
    profileFormRef.current.name.focus();
  }

  function disableEditorMode() {
    setIsEditorModeActive(false);
  }

  function checkSubmitButtonEnabled() {
    if (isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) {
      setIsSubmitButtonEnabled(true);
    }
    else setIsSubmitButtonEnabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    disableEditorMode();
    onUpdateUser(values);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile-form" action="#" ref={profileFormRef} noValidate onSubmit={handleSubmit}>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="name" className="profile-form__label">Имя</label>
            <input
              className={isInputValid.name === undefined || isInputValid.name ? "profile-form__input" : "profile-form__input profile-form__input_invalid"}
              type="text"
              name="name"
              id="name"
              readOnly={isEditorModeActive ? false : true}
              maxLength={30}
              minLength={2}
              required
              value={values.name ? values.name : ''}
              onChange={handleChange}>
            </input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">{errors.name}</p>
        </div>
        <div className="profile-form__row">
          <div className="profile-form__input-wrapper">
            <label htmlFor="email" className="profile-form__label">E-mail</label>
            <input className={isInputValid.email === undefined || isInputValid.email ? "profile-form__input" : "profile-form__input profile-form__input_invalid"}
              type="email"
              name="email"
              id="email"
              readOnly={isEditorModeActive ? false : true}
              required
              value={values.email ? values.email : ''}
              onChange={handleChange}>
            </input>
          </div>
          <p className="profile-form__error-message profile-form__error-message_place_input">{errors.email}</p>
        </div>
        <p className={isUpdateUserSuccess ? "profile-form__success-message profile-form__success-message_visible" : "profile-form__success-message"}>Данные успешно изменены</p>
        {errorMessage === '' ? null : <p className="profile-form__error-message profile-form__error-message_place_submit">{errorMessage}</p>}
        {!isEditorModeActive && <button className="profile-form__edit-button" type="button" onClick={enableEditorMode}>Редактировать</button>}
        {!isEditorModeActive && <button className="profile-form__logout-button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>}
        {isEditorModeActive && <button className="profile-form__submit-button" type="submit" disabled={!isSubmitButtonEnabled} >Сохранить</button>}
      </form>
    </section>
  )
}

export default Profile;
