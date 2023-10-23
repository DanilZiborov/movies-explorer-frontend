import React from "react";

import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  // для этапа 3 диплома
  // тут будет совем другая логика, не забыть

  const location = useLocation();

  const [isMovieSaved, setIsMovieSaved] = React.useState(false);

  const [isSavedMoviesPath, setIsSavedMoviesPath] = React.useState(false);


  React.useEffect(() => {
    location.pathname === '/saved-movies' ?
    setIsSavedMoviesPath(true) :
    setIsSavedMoviesPath(false);
  }, [location.pathname])


  function handleSaveMovie() {
    setIsMovieSaved(!isMovieSaved);
  }

  function handleDeleteMovie() {
    console.log(`удалена карточка с duration = ${movie.duration}`);
  }

  function countDuration(mins) {

    const hours = parseInt(mins / 60);
    let hoursString = `${hours}ч`
    if (hours === 0) {
      hoursString = '';
    }

    const minutes = mins % 60;
    let minutesString = `${minutes}м`
    // if (minutes < 10) {
    //   minutesString = `0${minutes}м`
    // }

    const duration = `${hoursString}${minutesString}`;
    return duration;
  }

  return (
    <article className="movie-card">
      <img className="movie-card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.name} />
      <div className="movie-card__wrapper">
        <p className="movie-card__title">{movie.nameRU}</p>
        { isSavedMoviesPath && <button className="movie-card__delete-button" onClick={handleDeleteMovie}></button>}
        {!isSavedMoviesPath && <button className={isMovieSaved ? 'movie-card__save-button movie-card__save-button_active' : 'movie-card__save-button'} onClick={handleSaveMovie}></button>}

      </div>
      <p className="movie-card__duration">{countDuration(movie.duration)}</p>

    </article>
  )
}

export default MoviesCard
