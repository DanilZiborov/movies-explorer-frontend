import React from "react";

function SearchForm({onCheckboxChange, isChecked, onSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit()
  }
  return(
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-wrapper">
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм"></input>
        <button className="search-form__submit-button" type="submit"></button>
      </div>
      <div htmlFor="movie" className="search-form__checkbox-wrapper">
        <div role="checkbox" className={isChecked ? 'search-form__checkbox search-form__checkbox_checked' : 'search-form__checkbox'} id="movie-checkbox" onClick={onCheckboxChange}  aria-checked={isChecked}></div>
        <label htmlFor="movie-checkbox" className="search-form__checkbox-label" >Короткометражки</label>
      </div>
    </form>
  )
}

export default SearchForm;
