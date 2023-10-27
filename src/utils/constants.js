export const signinPageData = {
  title: 'Рады видеть!',
  buttonText: 'Войти',
  buttonSubtitle: 'Ещё не зарегистрированы?',
  buttonSubtitleLink: '/signup',
  buttonSubtitleLinkText: 'Регистрация',

}

export const signupPageData = {
  title: 'Добро пожаловать!',
  buttonText: 'Зарегистрироваться',
  buttonSubtitle: 'Уже зарегистрированы?',
  buttonSubtitleLink: '/signin',
  buttonSubtitleLinkText: 'Войти',

}

export const moviesCardlistMessages = {
  notFound: 'Ничего не найдено',
  serverError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}

export function sleep(milisec) {
  setTimeout(() => {
    console.log('тут');
  }, milisec);
}
