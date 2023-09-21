import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NavPopup from '../NavPopup/NavPopup';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  function openNavPopup() {
    setIsNavPopupOpen(true);
  }

  function closeNavPopup() {
    setIsNavPopupOpen(false);
  }

  return (
    <div className='page'>

      <Header isLoggedIn={isLoggedIn} onNavMenuClick={openNavPopup}/>
      <Main/>
      <Footer/>

      { isNavPopupOpen && <NavPopup onClose={closeNavPopup}/> }


    </div>

  );
}

export default App;
