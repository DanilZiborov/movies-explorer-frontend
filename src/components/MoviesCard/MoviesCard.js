import React from "react";

function MoviesCard({movie}) {

  // временный стейт. не забыть удалить
  const [isSaved, setIsSaved] = React.useState(false);

  function handleMovieSave() {
    setIsSaved(!isSaved);
  }

  return (
  <article className="movie-card">
    <img className="movie-card__image" src={movie.image.movieImagePath} alt={movie.name}/>
    <div className="movie-card__wrapper">
      <p className="movie-card__name">{movie.name}</p>
      <button className={isSaved ? 'movie-card__save-button movie-card__save-button_active' : 'movie-card__save-button'} onClick={handleMovieSave}></button>
    </div>
    <p className="movie-card__duration">{movie.duration}</p>

  </article>
  )
}

export default MoviesCard
