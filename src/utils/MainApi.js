class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}:`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }

  getUserInfo(token) {
    return this._request(`${this._baseUrl}/users/me`, { headers: { "Authorization": `Bearer ${token}`, ...this._headers } })
  }

  editUserInfo({ name, email }, token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: { "Authorization": `Bearer ${token}`, ...this._headers },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
  }

  saveMovie({ country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN }, token) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: { "Authorization": `Bearer ${token}`, ...this._headers },
      body: JSON.stringify({
        country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN
      })
    })
  }

  deleteMovie(movieId, token) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: { "Authorization": `Bearer ${token}`, ...this._headers }
    })
  }

  getSavedMovies(token) {
    return this._request(`${this._baseUrl}/movies`, { headers: { "Authorization": `Bearer ${token}`, ...this._headers } })
  }

  register(password, email, name) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email, name })
    })
  }

  authorize(password, email) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email })
    })
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.supermovies.nomoredomainsicu.ru',
  headers: {
    "Content-Type": "application/json"
  }
})

export default mainApi;
