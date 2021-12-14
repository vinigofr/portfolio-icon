import React from 'react';
import './App.css';
import Main from './Components/Main';
import AppContext from './ContextAPI/AppContext';

const App = function () {
  const [params, setParams] = React.useState({});
  const [firstTime, setFirstTime] = React.useState(true);

  const context = {
    params, setParams,
    firstTime, setFirstTime,
  }

  return <div className="App">
    <AppContext.Provider value={ context }>
      <Main />
    </AppContext.Provider>
  </div>;
};

export default App;
