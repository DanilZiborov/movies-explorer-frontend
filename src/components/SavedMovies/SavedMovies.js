import React from "react";

import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return(
    <section className="movies">
    <SearchForm/>
    {/* {isPreloaderShown && <Preloader />} */}
    <MoviesCardlist />
  </section>
  )
}

export default SavedMovies;
