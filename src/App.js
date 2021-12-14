import React from 'react';
import './App.css';
import Main from './Components/Main';
import AppContext from './ContextAPI/AppContext';

const App = function () {
  const [params, setParams] = React.useState({});

  const context = {
    params, setParams
  }

  return <div className="App">
    <AppContext.Provider value={ context }>
      <Main />
    </AppContext.Provider>
  </div>;
};

export default App;
