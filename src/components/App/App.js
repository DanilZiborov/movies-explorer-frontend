import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className='page'>

      <Header isLoggedIn={isLoggedIn}/>
      <Main/>

    </div>

  );
}

export default App;
