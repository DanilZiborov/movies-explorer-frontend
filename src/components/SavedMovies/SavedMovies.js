import React from "react";

import MoviesCardlist from "../MoviesCardlist/MoviesCardlist";
import SearchForm from "../SearchForm/SearchForm";
import mainApi from "../../utils/MainApi";

import MoviesFilter from "../../utils/MoviesFilter";
import Preloader from "../Preloader/Preloader";

import { moviesCardlistMessages } from "../../utils/constants";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [messageText, setMessageText] = React.useState('');
  const [isPreloaderShown, setIsPreloaderShown] = React.useState(false);

  React.useEffect(() => {

    const token = localStorage.getItem('jwt');
    setIsPreloaderShown(true);
    mainApi.getSavedMovies(token)
      .then((res) => {
        setSavedMovies(res.data);
      if(res.data.length === 0)
      setMessageText(moviesCardlistMessages.notFound);
      })
      .catch((err) => {
        console.log(err);
        messageText(moviesCardlistMessages.serverError);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      })
  }, [])

  React.useEffect(
    () => {
      filterMovies();
    }, [savedMovies, isCheckboxChecked, searchQuery]);

  function filterMovies() {

    const filter = new MoviesFilter({movies:savedMovies, isCheckboxChecked, searchQuery});
    filter.filterByCheckbox();
    filter.filterBySearchQuery();

    if(filter.movies.length === 0)
      setMessageText(moviesCardlistMessages.notFound);
    else setMessageText('');

    setFilteredMovies(filter.movies);
  }

  function onQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  function onCheckboxChange() {
    if (isCheckboxChecked) {
      setIsCheckboxChecked(false);
    }
    else {
      setIsCheckboxChecked(true);
    }
  }

  function handleDeleteMovie(movie) {

    const token = localStorage.getItem('jwt');
    mainApi.deleteMovie(movie._id, token)
      .then((res) => {
        console.log(res);
        setSavedMovies((prevState) => prevState.filter(m => m._id !== movie._id ));
      })
      .catch((err) => { console.log(err) });

  }

  return(
    <section className="movies">
    <SearchForm onCheckboxChange={onCheckboxChange} isCheckboxChecked={isCheckboxChecked} searchQuery={searchQuery} onQueryChange={onQueryChange} />
    {isPreloaderShown && <Preloader />}
    <MoviesCardlist renderedMovies={filteredMovies} isAddButtonShown={false} messageText={messageText} onDeleteMovie={handleDeleteMovie}  />
  </section>
  )
}

export default SavedMovies;
