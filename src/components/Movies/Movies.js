import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";


function Movies({movies}) {
  const [isShortFilms, setIsShortFilms] = React.useState(false);
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);

  function toggleShortFilmsFilter() {
    setIsShortFilms(!isShortFilms);
  }

  function handleSubmit() {
    setIsPreloaderShown(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('промис готов'), 1500)
    })
    .then((res => {
      setIsPreloaderShown(false);
      console.log(res);
    }))


  }


  return (
    <section className="movies">
      <SearchForm onCheckboxChange={toggleShortFilmsFilter} isChecked={isShortFilms} onSubmit={handleSubmit} />
      {isPreloaderShown && <Preloader />}
      <MoviesCardlist movies={movies} />
      </section>


  )
}

export default Movies
