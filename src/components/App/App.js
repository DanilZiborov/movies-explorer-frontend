import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className='page'>

      <Header isLoggedIn={isLoggedIn}/>
      <Main/>
      <Footer/>

    </div>

  );
}

export default App;
