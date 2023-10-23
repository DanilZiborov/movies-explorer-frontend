import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";

import moviesApi from "../../utils/MoviesApi";


function Movies() {

  const [movies, setMovies] = React.useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [filteredMovies, setFilteredMovies] = React.useState([]);

  React.useEffect(
    () => {
      console.log('сработал юзеффект локал сторадж');
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsCheckboxChecked(JSON.parse(localStorage.getItem('isShort')));
        setSearchQuery(localStorage.getItem('query'));
      }
    }
    , []);

  React.useEffect(
    () => {

      if (movies.length === 0)
        return;

      console.log('сработал юзеффект фильтра');
      filterMovies();
    }
    , [movies, isCheckboxChecked, searchQuery]);


  function onQueryChange(e) {
    setSearchQuery(e.target.value);
    localStorage.setItem('query', e.target.value);
    console.log(e.target.value);
  }

  function onCheckboxChange() {
    if (isCheckboxChecked) {
      setIsCheckboxChecked(false);
      localStorage.setItem('isShort', false);
    }
    else {
      setIsCheckboxChecked(true);
      localStorage.setItem('isShort', true);
    }

  }

  function searchMovies() {

    if (movies.length === 0) {
      moviesApi.getMovies()
        .then((res) => {
          console.log('запрос к битфильмс');
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(movies));
          // возможно, нужна какая-то логика защиты от попадания в сторадж пустой строки query
          // (помимо валидации)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function filterMovies() {

    if (movies.length === 0)
      return;

    console.log('фильтр начал работу');

    let filteredMovies = movies;

    if (isCheckboxChecked) {
      filteredMovies = movies.filter(movie => {
        return Number(movie.duration) <= 40;
      })
    }

    filteredMovies = filteredMovies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
    })

    setFilteredMovies(filteredMovies);
  }

  return (
    <section className="movies">
      <SearchForm onCheckboxChange={onCheckboxChange} isCheckboxChecked={isCheckboxChecked} searchQuery={searchQuery} onQueryChange={onQueryChange} onSubmit={searchMovies} />
      {/* {isPreloaderShown && <Preloader />} */}
      <MoviesCardlist movies={filteredMovies} />
    </section>


  )
}

export default Movies
