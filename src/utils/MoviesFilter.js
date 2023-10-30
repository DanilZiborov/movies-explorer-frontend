class MoviesFilter {
  constructor({movies, isCheckboxChecked, searchQuery, initialMovies, savedMovies}) {
    this.movies = movies;
    this._savedMovies = savedMovies;

    this._isCheckboxChecked = isCheckboxChecked;
    this._searchQuery = searchQuery;
    this._initialMovies = initialMovies;
  }

  filterByCheckbox() {
    if (this._isCheckboxChecked) {
      this.movies = this.movies.filter(movie => {
        return Number(movie.duration) <= 40;
      })
    }
  }

  filterBySearchQuery() {
    this.movies = this.movies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(this._searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(this._searchQuery.toLowerCase());
    })
  }

  filterByInitialQuantity() {
    this.movies = this.movies.filter((movie, index )=> {
      return index < (this._initialMovies);
    })
  }

  markSavedMovies() {
    if(this._savedMovies.length === 0)
    return;

    this.movies.forEach((movie) => {
      if(this._savedMovies.some(savedMovie => savedMovie.movieId === movie.id))
      movie.isSaved = true;
      else movie.isSaved = false;
    })
  }

}

export default MoviesFilter;
