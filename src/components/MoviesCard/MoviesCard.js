import React from "react";

import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const [isMovieSaved, setIsMovieSaved] = React.useState(false);
  const [isSavedMoviesPath, setIsSavedMoviesPath] = React.useState(false);

  React.useEffect(() => {
    location.pathname === '/saved-movies' ?
    setIsSavedMoviesPath(true) :
    setIsSavedMoviesPath(false);
  }, [location.pathname]);

  React.useEffect(() => {
    movie.isSaved ? setIsMovieSaved(true) : setIsMovieSaved(false);
  }, [movie]);

  function handleSaveMovie() {
    onSaveMovie(movie);
    setIsMovieSaved(!isMovieSaved);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
    setIsMovieSaved(!isMovieSaved);
  }

  function countDuration(mins) {
    const hours = parseInt(mins / 60);
    let hoursString = `${hours}ч`
    if (hours === 0)
      hoursString = '';

    const minutes = mins % 60;
    let minutesString = `${minutes}м`
    const duration = `${hoursString}${minutesString}`;
    return duration;
  }

  return (
    <article className="movie-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer"><img className="movie-card__image" src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} /></a>
      <div className="movie-card__wrapper">
        <p className="movie-card__title">{movie.nameRU}</p>
        { isSavedMoviesPath && <button className="movie-card__delete-button" onClick={handleDeleteMovie}></button>}
        {!isSavedMoviesPath && <button className={isMovieSaved ? 'movie-card__save-button movie-card__save-button_active' : 'movie-card__save-button'} onClick={isMovieSaved ? handleDeleteMovie : handleSaveMovie}></button>}
      </div>
      <p className="movie-card__duration">{countDuration(movie.duration)}</p>

    </article>
  )
}

export default MoviesCard
