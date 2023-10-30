import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardlist({ renderedMovies, onAddButtonClick, isAddButtonShown, messageText, onSaveMovie, onDeleteMovie }) {

  return (
    <div className="movies__cardlist">
      <div className="movies__cardlist-grid">
        {renderedMovies.map((movie) => (
          (<MoviesCard movie={movie} key={movie.id ? movie.id : movie.movieId} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />)
        ))}
      </div>
      <p className="movies__cardlist-result-message">{messageText}</p>
      {isAddButtonShown && <button className="movies__cardlist-button" onClick={onAddButtonClick}>Ещё</button>}
    </div>
  );
}

export default MoviesCardlist;
