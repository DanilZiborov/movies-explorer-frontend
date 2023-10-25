import React from "react";

function SearchForm({onCheckboxChange, isCheckboxChecked, searchQuery, onQueryChange, onSubmit}) {

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
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-wrapper">
        <div className="search-form__icon"></div>
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм" onChange={handleQueryChange} defaultValue={searchQuery} required></input>
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
    </form>
  )
}

export default SearchForm;
