import React from "react";

function SearchForm({onCheckboxChange, isCheckboxChecked, searchQuery, onQueryChange, onSubmit=()=>{}, errorMessage}) {

  function handleQueryChange(e) {
    onQueryChange(e);
  }

  function handleCheckboxChange() {
    onCheckboxChange();
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return(
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__input-wrapper">
        <div className="search-form__icon"></div>
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм" onChange={handleQueryChange} value={searchQuery} required></input>
        <button className="search-form__submit-button" type="submit"></button>
        <div className="search-form__checkbox-wrapper">
        <div role="checkbox" className={isCheckboxChecked ? 'search-form__checkbox search-form__checkbox_checked' : 'search-form__checkbox'} onClick={handleCheckboxChange}  aria-checked={isCheckboxChecked}></div>
        <p className="search-form__checkbox-label" >Короткометражки</p>
      </div>
      </div>
      <div className="search-form__checkbox-wrapper search-form__checkbox-wrapper_mobile">
        <div role="checkbox" className={isCheckboxChecked? 'search-form__checkbox search-form__checkbox_checked' : 'search-form__checkbox'} onClick={handleCheckboxChange}  aria-checked={isCheckboxChecked}></div>
        <p className="search-form__checkbox-label" >Короткометражки</p>
      </div>
      {errorMessage === '' ? null : <p className="profile-form__error-message profile-form__error-message_place_submit">{errorMessage}</p>}
    </form>
  )
}

export default SearchForm;
