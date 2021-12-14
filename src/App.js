import React from 'react';
import './App.css';
import Main from './Components/Main';
import AppContext from './ContextAPI/AppContext';

const App = function () {

  const [url, setUrl] = React.useState('');

  const context = {
    url, setUrl
  }

  return <div className="App">
    <AppContext.Provider value={ context }>
      <Main />
    </AppContext.Provider>
  </div>;
};

export default App;
