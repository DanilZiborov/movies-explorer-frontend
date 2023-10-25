import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardlist({ renderedMovies }) {
  const location = useLocation();

  return (
    <div className="movies__cardlist">
      <div className="movies__cardlist-grid">
        {renderedMovies.map((movie, index) => (
          (<MoviesCard movie={movie} key={index} />)
        ))}
      </div>
      {location.pathname === '/movies' && <button className="movies__cardlist-button">Ещё</button>}
    </div>
  );
}

export default MoviesCardlist;
