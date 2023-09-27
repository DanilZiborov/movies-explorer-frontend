import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardlist>
        <MoviesCard />
      </MoviesCardlist>
      </section>


  )
}

export default Movies
