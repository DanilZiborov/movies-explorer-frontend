import React from "react";

function SearchForm() {
  return(
    <form className="search-form">
      <div className="search-form__input-wrapper">
        <input className="search-form__input" type="text" name="movie" placeholder="Фильм"></input>
        <button className="search-form__submit-button" type="submit"></button>
      </div>
      <div htmlFor="movie" className="search-form__checkbox-wrapper">
        <input className="search-form__checkbox" type="checkbox" id="movie-checkbox"></input>
        <label htmlFor="movie-checkbox" className="search-form__checkbox-label" >Короткометражки</label>
      </div>
    </form>
  )
}

export default SearchForm;
