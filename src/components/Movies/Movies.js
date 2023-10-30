import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";

import moviesApi from "../../utils/MoviesApi";

import { moviesCardlistMessages } from "../../utils/constants";
import MoviesFilter from "../../utils/MoviesFilter";
import mainApi from "../../utils/MainApi";

function Movies() {

  const [movies, setMovies] = React.useState([]);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [additionalMovies, setAdditionalMovies] = React.useState(0);
  const [initialMovies, setInitialMovies] = React.useState(0);

  const [isAddButtonShown, setIsAddButtonShown] = React.useState(false);
  const [messageText, setMessageText] = React.useState('');
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);

  React.useEffect(
    () => {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsCheckboxChecked(JSON.parse(localStorage.getItem('isShort')));
        setSearchQuery(localStorage.getItem('query'));
      }
      // else setMessageText('Нужно ввести название фильма');
    }
    , []);

  React.useEffect(
    () => {
      const token = localStorage.getItem('jwt');
      mainApi.getSavedMovies(token)
        .then((res) => {
          setSavedMovies(res.data);
        })
        .catch(err => console.log(err));
    }, []);


  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    checkWindowWidth();
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    }
  }, []);

  React.useEffect(
    () => {
      console.log(savedMovies);
      if (initialMovies === 0 || movies.length === 0)
        return;

      filterMovies();
    }, [movies, isCheckboxChecked, searchQuery, initialMovies, savedMovies]);

  function searchMovies() {
    if (movies.length === 0) {
      if (searchQuery === '') {
        setMessageText('Нужно ввести название фильма');
        return;
      }

      setIsPreloaderShown(true);
      moviesApi.getMovies()
        .then((res) => {
          console.log('запрос к битфильмс');
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res));
          setMessageText('');
        })
        .catch((err) => {
          console.log(err);
          setMessageText(moviesCardlistMessages.serverError);
        })
        .finally(() => {
          setIsPreloaderShown(false);
        })
    }
  }

  function filterMovies() {
    const filter = new MoviesFilter({ movies, savedMovies, isCheckboxChecked, searchQuery, initialMovies });
    filter.filterByCheckbox();
    filter.filterBySearchQuery();

    if (filter.movies.length === 0)
      setMessageText(moviesCardlistMessages.notFound);
    else setMessageText('');

    if (filter.movies.length === 0 || filter.movies.length <= initialMovies)
      setIsAddButtonShown(false);
    else setIsAddButtonShown(true);

    filter.filterByInitialQuantity();
    filter.markSavedMovies();

    setRenderedMovies(filter.movies);
  }

  function checkWindowWidth() {
    setTimeout(() => {
      if (window.innerWidth < 768) {
        setInitialMovies(5);
        setAdditionalMovies(2);
      }

      if (window.innerWidth < 1137 && window.innerWidth >= 768) {
        setInitialMovies(8);
        setAdditionalMovies(2);
      }

      if (window.innerWidth < 1280 && window.innerWidth >= 1137) {
        setInitialMovies(9);
        setAdditionalMovies(3);
      }

      if (window.innerWidth >= 1280) {
        setInitialMovies(16);
        setAdditionalMovies(4);
      }
    }, 200)
  }

  function onQueryChange(e) {
    setSearchQuery(e.target.value);
    localStorage.setItem('query', e.target.value);
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

  function addMovies() {
    setInitialMovies(initialMovies + additionalMovies);
  }

  function handleSaveMovie(movie) {
    const token = localStorage.getItem('jwt');
    const movieData = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }

    mainApi.saveMovie(movieData, token)
      .then((res) => {
        setSavedMovies([...savedMovies, res.data]);
      })
      .catch((err) => { console.log(err) });
  }

  function handleDeleteMovie(movie) {
    const targetMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovie(targetMovie._id, token)
      .then(() => {
        setSavedMovies((prevState) => prevState.filter(m => m.movieId !== movie.id));
      })
      .catch((err) => { console.log(err) });
  }

  return (
    <section className="movies">
      <SearchForm
        onCheckboxChange={onCheckboxChange}
        isCheckboxChecked={isCheckboxChecked}
        searchQuery={searchQuery}
        onQueryChange={onQueryChange}
        onSubmit={searchMovies}
      />

      {isPreloaderShown && <Preloader />}

      <MoviesCardlist
        renderedMovies={renderedMovies}
        onAddButtonClick={addMovies}
        isAddButtonShown={isAddButtonShown}
        messageText={messageText}
        onSaveMovie={handleSaveMovie}
        onDeleteMovie={handleDeleteMovie} />
    </section>


  )
}

export default Movies
