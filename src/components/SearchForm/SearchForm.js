import React from "react";

function SearchForm({onCheckboxChange, isChecked, onSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit()
  }
  return(
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-wrapper">
        <div className="search-form__icon"></div>
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм"></input>
        <button className="search-form__submit-button" type="submit"></button>
        <div className="search-form__checkbox-wrapper">
        <div role="checkbox" className={isChecked ? 'search-form__checkbox search-form__checkbox_checked' : 'search-form__checkbox'} onClick={onCheckboxChange}  aria-checked={isChecked}></div>
        <p className="search-form__checkbox-label" >Короткометражки</p>
      </div>
      </div>
      <div className="search-form__checkbox-wrapper search-form__checkbox-wrapper_mobile">
        <div role="checkbox" className={isChecked ? 'search-form__checkbox search-form__checkbox_checked' : 'search-form__checkbox'} onClick={onCheckboxChange}  aria-checked={isChecked}></div>
        <p className="search-form__checkbox-label" >Короткометражки</p>
      </div>
    </form>
  )
}

export default SearchForm;
