class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }

  getMovies() {
    return this._request(`${this._baseUrl}`, { headers: {...this._headers } })
  }

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Content-Type": "application/json",
  }
})

export default moviesApi;
