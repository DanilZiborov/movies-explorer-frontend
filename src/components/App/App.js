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
import NotFound from '../NotFound/NotFound';
import ProtectedRouteElement from '../../utils/ProtectedRoute';

import { signinPageData, signupPageData } from '../../utils/constants';
import SavedMovies from '../SavedMovies/SavedMovies';

import mainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isHeaderShown, setIsHeaderShown] = React.useState(true);
  const [isFooterShown, setIsFooterShown] = React.useState(true);

  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });

  let location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      mainApi.getUserInfo(token)
        .then((res) => {
          setCurrentUser(res.data);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        })
        .catch(err => {
          console.error(`Проблема c загрузкой информации пользователя, ${err}`);
        });
    }
  }, []);

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
    localStorage.removeItem('jwt');
    navigate('/', { replace: true });
  }

  function handleSignin({password, email}) {
    mainApi.authorize(password, email)
    .then((res) => {
      if (res.token) {
        console.log(res);
        localStorage.setItem('jwt', res.token);
      }
      const token = localStorage.getItem('jwt', res.token);
      mainApi.getUserInfo(token)
        .then((res) => {
          navigate('/movies', { replace: true });
          setCurrentUser(res.data);
          setIsLoggedIn(true);
        })
    })
    .catch((err) => {
      console.error(`${err} не удалось выполнить вход`);
    })
  }

  function handleSignUp({password, email, name}) {
    mainApi.register(password, email, name)
      .then((res) => {
        setIsRegisterSuccess(true);
        setTimeout(() => {
          setIsRegisterSuccess(false);
          navigate('/signin', { replace: true });
        }, 1500);
      })
      .catch((err) => {
        setIsRegisterSuccess(false);
        console.error(err);
      })
  }

  function handleUpdateUser(userInfo) {
    const token = localStorage.getItem('jwt');
    mainApi.editUserInfo(userInfo, token)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.error(`Проблема c редактированием информации пользователя, ${err}`);
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
            <Route path='/profile' element={<ProtectedRouteElement element={Profile} isLoggedIn={isLoggedIn} onSignOut={handleSignOut} onUpdateUser={handleUpdateUser}/>} />
            <Route path='/movies' element={<ProtectedRouteElement element={Movies} isLoggedIn={isLoggedIn} />}/>
            <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} isLoggedIn={isLoggedIn} />}/>
            <Route path='/signin' element={<Login data={signinPageData} onSubmit={handleSignin}/>}></Route>
            <Route path='/signup' element={<Register data={signupPageData} onSubmit={handleSignUp} isRegisterSuccess={isRegisterSuccess}/>}></Route>
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
