import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";

import moviesApi from "../../utils/MoviesApi";


function Movies() {

  const [movies, setMovies] = React.useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [renderedMovies, setRenderedMovies] = React.useState([]);

  const [moviesCounter, setMoviesCounter] = React.useState(0);
  const [additionalMovies, setAdditionalMovies] = React.useState(0);
  const [initialMovies, setInitialMovies] = React.useState(0);

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

  React.useEffect(() => {
    console.log('сработал юзэффект window');

    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkWindowWidth();
      }, 200);
    })

    checkWindowWidth();

  }, []);

  React.useEffect(
    () => {
      if (initialMovies === 0 || movies.length === 0)
        return;

      console.log('сработал юзеффект фильтра');
      filterMovies();
    }, [movies, isCheckboxChecked, searchQuery, initialMovies]);

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
          localStorage.setItem('movies', JSON.stringify(res));
          // возможно, нужна какая-то логика защиты от попадания в сторадж пустой строки query
          // (помимо валидации)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function filterMovies() {

    console.log('фильтр начал работу');

    let filteredMovies = movies;

    if (isCheckboxChecked) {
      filteredMovies = filteredMovies.filter(movie => {
        return Number(movie.duration) <= 40;
      })
    }

    filteredMovies = filteredMovies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
    })

    filteredMovies = filteredMovies.filter((movie, index )=> {
      return index < (initialMovies);
    })

    setRenderedMovies(filteredMovies);

    console.log(movies.length);
    console.log(filteredMovies.length)

  }

  function checkWindowWidth() {
    if (window.innerWidth < 768) {
      setInitialMovies(5);
      setAdditionalMovies(2);
      console.log('установлены параметры до 768');
    }

    if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      setInitialMovies(8);
      setAdditionalMovies(2);
      console.log('установлены параметры 768 - 1280');
    }

    if (window.innerWidth >= 1280) {
      setInitialMovies(16);
      setAdditionalMovies(4);
      console.log('установлены параметры 1280+');
    }
  }

  return (
    <section className="movies">
      <SearchForm onCheckboxChange={onCheckboxChange} isCheckboxChecked={isCheckboxChecked} searchQuery={searchQuery} onQueryChange={onQueryChange} onSubmit={searchMovies} />
      {/* {isPreloaderShown && <Preloader />} */}
      <MoviesCardlist renderedMovies={renderedMovies} />
    </section>


  )
}

export default Movies
