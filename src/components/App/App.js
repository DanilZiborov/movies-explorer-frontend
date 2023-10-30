import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavPopup from '../NavPopup/NavPopup';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import ProtectedRouteElement from '../../utils/ProtectedRoute';

import mainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isHeaderShown, setIsHeaderShown] = React.useState(true);
  const [isFooterShown, setIsFooterShown] = React.useState(true);

  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);
  const [isUpdateUserSuccess, setIsUpdateUserSuccess] = React.useState(false);

  const [signUpErrorMessage, setSignUpErrorMessage] = React.useState('');
  const [signInErrorMessage, setSignInErrorMessage] = React.useState('');
  const [updateUserErrorMessage, setUpdateUserErrorMessage] = React.useState('');
  const [isFormBlocked, setIsFormBlocked] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });

  let location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {

  if (!isLoggedIn) {
      const token = localStorage.getItem('jwt');
      mainApi.getUserInfo(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
          if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup')navigate('/movies');
        })
        .catch(err => {
          console.error(`Проблема c загрузкой информации пользователя`);
        });
    }
  }, [location.pathname]);

  React.useEffect(() => {
    switch (location.pathname) {
      case '/signin':
        setIsHeaderShown(false);
        setIsFooterShown(false);
        break;
      case '/signup':
        setIsHeaderShown(false);
        setIsFooterShown(false);
        break;
      case '/profile':
        setIsHeaderShown(true);
        setIsFooterShown(false);
        break;
      default:
        setIsHeaderShown(true);
        setIsFooterShown(true);

    }

  }, [location.pathname])

  function openNavPopup() {
    setIsNavPopupOpen(true);
  }

  function closeNavPopup() {
    setIsNavPopupOpen(false);
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    setUpdateUserErrorMessage('');

    localStorage.clear();
    navigate('/', { replace: true });
  }

  function handleSignin({ password, email }) {
    setIsFormBlocked(true);
    mainApi.authorize(password, email)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
        }
        const token = localStorage.getItem('jwt', res.token);
        mainApi.getUserInfo(token)
          .then((res) => {
            setSignUpErrorMessage('');
            navigate('/movies', { replace: true });
            setIsLoggedIn(true);
            setCurrentUser(res.data);
          })
          .catch((err) => {
            console.log(err);
            switch (err.status) {
              case 401:
                setSignInErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
                break;
                default:
                setSignInErrorMessage(`Ошибка со статусом ${err.status}`)
            }
          })
      })
      .catch((err) => {
        console.log(err);
        switch (err.status) {
          case 401:
            setSignInErrorMessage('Вы ввели неправильный логин или пароль.')
            break;
          case 404:
            setSignInErrorMessage('Страница по указанному маршруту не найдена')
            break;
          case 500:
            setSignInErrorMessage('При авторизации на сервере произошла ошибка')
            break;
          default:
            setSignInErrorMessage(`Ошибка со статусом ${err.status}`)
        }
      })
      .finally(() => {
        setIsFormBlocked(false);
      })
  }

  function handleSignUp({ password, email, name }) {
    setIsFormBlocked(true);
    mainApi.register(password, email, name)
      .then((res) => {
        setSignUpErrorMessage('');
        setIsRegisterSuccess(true);
        setTimeout(() => {
          setIsRegisterSuccess(false);
          handleSignin({ password, email });
        }, 1500);
      })
      .catch((err) => {
        setIsRegisterSuccess(false);
        console.log(err);
        switch (err.status) {
          case 409:
            setSignUpErrorMessage('Пользователь с таким email уже существует.')
            break;
          case 404:
            setSignUpErrorMessage('Страница по указанному маршруту не найдена')
            break;
          case 500:
            setSignUpErrorMessage('При регистрации пользователя на сервере произошла ошибка')
            break;
          default:
            setSignUpErrorMessage(`Ошибка со статусом ${err.status}`)
        }
      })
      .finally(() => {setIsFormBlocked(false)});

  }

  function handleUpdateUser(userInfo) {
    const token = localStorage.getItem('jwt');
    setIsFormBlocked(true);
    mainApi.editUserInfo(userInfo, token)
      .then((res) => {
        setUpdateUserErrorMessage('');
        setIsUpdateUserSuccess(true);
        setTimeout(() => {
          setIsUpdateUserSuccess(false);
        }, 2000);
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.log(err);
        switch (err.status) {
          case 409:
            setUpdateUserErrorMessage('Пользователь с таким email уже существует.')
            break;
          case 404:
            setUpdateUserErrorMessage('Страница по указанному маршруту не найдена')
            break;
          case 500:
            setUpdateUserErrorMessage('При обновлении профиля на сервере произошла ошибка')
            break;
          default:
            setUpdateUserErrorMessage(`Ошибка со статусом ${err.status}`)
        }

      })
      .finally(() => {
        setIsFormBlocked(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__wrapper'>

          {isHeaderShown && <Header isLoggedIn={isLoggedIn} onNavMenuClick={openNavPopup} />}
          <main>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn} onSignOut={handleSignOut} onUpdateUser={handleUpdateUser} errorMessage = {updateUserErrorMessage} isUpdateUserSuccess={isUpdateUserSuccess} />} />
              <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} />} />
              <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn} isFormBlocked={isFormBlocked} />} />
              <Route path='/signin' element={<Login onSubmit={handleSignin} errorMessage={signInErrorMessage} isFormBlocked={isFormBlocked} />}></Route>
              <Route path='/signup' element={<Register onSubmit={handleSignUp} isRegisterSuccess={isRegisterSuccess} errorMessage={signUpErrorMessage} isFormBlocked={isFormBlocked} />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {isFooterShown && <Footer />}

          {isNavPopupOpen && <NavPopup onClose={closeNavPopup} />}

        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
