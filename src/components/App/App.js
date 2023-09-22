import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavPopup from '../NavPopup/NavPopup';
import Login from '../Login/Login';

import { signinPageData, signupPageData } from '../../utils/constants';


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isHeaderFooterShown, setIsHeaderFooterShown] = React.useState(true);

  let location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/signin' || location.pathname === '/signup')
      setIsHeaderFooterShown(false);
    else setIsHeaderFooterShown(true);
  }, [location.pathname])

  function openNavPopup() {
    setIsNavPopupOpen(true);
  }

  function closeNavPopup() {
    setIsNavPopupOpen(false);
  }

  return (
    <div className='page'>

      {isHeaderFooterShown && <Header isLoggedIn={isLoggedIn} onNavMenuClick={openNavPopup} />}
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/signin' element={<Login data={signinPageData} />}></Route>
      </Routes>
      { isHeaderFooterShown && <Footer />}

      {isNavPopupOpen && <NavPopup onClose={closeNavPopup} />}


    </div>

  );
}

export default App;
