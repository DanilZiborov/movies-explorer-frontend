import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardlist({ movies }) {
  return (
    <div className="movies__cardlist">
      <div className="movies__cardlist-grid">
        {movies.map((movie, index) => (
          (<MoviesCard movie={movie} key={index} />)
        ))}
      </div>
      <button className="movies__cardlist-button">Ещё</button>
    </div>
  );
}

export default MoviesCardlist;
