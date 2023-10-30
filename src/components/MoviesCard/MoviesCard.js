import React from "react";

import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const [isSavedMoviesPath, setIsSavedMoviesPath] = React.useState(false);

  React.useEffect(() => {
    location.pathname === '/saved-movies' ?
    setIsSavedMoviesPath(true) :
    setIsSavedMoviesPath(false);
  }, [location.pathname]);

  function handleSaveMovie() {
    onSaveMovie(movie);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
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
        {!isSavedMoviesPath && <button className={movie.isSaved ? 'movie-card__save-button movie-card__save-button_active' : 'movie-card__save-button'} onClick={movie.isSaved ? handleDeleteMovie : handleSaveMovie}></button>}
      </div>
      <p className="movie-card__duration">{countDuration(movie.duration)}</p>

    </article>
  )
}

export default MoviesCard
