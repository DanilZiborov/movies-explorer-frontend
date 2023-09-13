import React from 'react';

import Header from '../Header/Header';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className='page'>

      <Header isLoggedIn={isLoggedIn}/>

    </div>

  );
}

export default App;
