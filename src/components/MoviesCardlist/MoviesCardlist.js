import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardlist({ movies }) {
  const location = useLocation();

  const [renderedMovies, setRenderedMovies] = React.useState([]);

  const [moviesCounter, setMoviesCounter] = React.useState(0);
  const [additionalMovies, setAdditionalMovies] = React.useState(0);
  const [initialMovies, setInitialMovies] = React.useState(0);

  const [windowSize, setWindowSize] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('resize', (e) => {
      setTimeout(() => {
      }, 1000);
      console.log(e.target.innerWidth);
    })
  }, []);

  React.useEffect(() => {
    if (renderedMovies.length > initialMovies)
    return;

    render(initialMovies);
  }, [initialMovies]);

  function render(iterations) {

    movies.forEach((movie, index) => {
      if(index < moviesCounter || index > moviesCounter + iterations)
        return;

      else setRenderedMovies(renderedMovies.push(movie));
    })
    setMoviesCounter(moviesCounter + iterations);
  }


  return (
    <div className="movies__cardlist">
      <div className="movies__cardlist-grid">
        {renderedMovies && renderedMovies.map((movie, index) => (
          (<MoviesCard movie={movie} key={index} />)
        ))}
      </div>
      {location.pathname === '/movies' && <button className="movies__cardlist-button">Ещё</button>}
    </div>
  );
}

export default MoviesCardlist;
