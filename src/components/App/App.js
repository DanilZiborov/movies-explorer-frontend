import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavPopup from '../NavPopup/NavPopup';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';

import { signinPageData, signupPageData } from '../../utils/constants';
import { movies } from '../../utils/constants';


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isHeaderShown, setIsHeaderShown] = React.useState(true);
  const [isFooterShown, setIsFooterShown] = React.useState(true);

  let location = useLocation();
  const navigate = useNavigate();

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

  function handleSignout() {
    setIsLoggedIn(false);
    navigate('/', {replace: true});
    console.log('выход');
  }

  function handleSignin() {
    setIsLoggedIn(true);
    navigate('/movies', {replace: true});
    console.log('вход');
  }

  function handleSignup() {
    navigate('/signin', {replace: true});
    console.log('рега');
  }

  return (
    <div className='page'>

      {isHeaderShown && <Header isLoggedIn={isLoggedIn} onNavMenuClick={openNavPopup} location={location} />}
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/profile' element={<Profile onSignout={handleSignout} />}></Route>
        <Route path='/signin' element={<Login data={signinPageData} onSubmit={handleSignin} />}></Route>
        <Route path='/signup' element={<Register data={signupPageData} onSubmit={handleSignup} />}></Route>
        <Route path='/movies' element={<Movies movies={movies} />}></Route>
      </Routes>
      {isFooterShown && <Footer />}

      {isNavPopupOpen && <NavPopup onClose={closeNavPopup} />}


    </div>

  );
}

export default App;
