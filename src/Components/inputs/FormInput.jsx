import React from 'react';
import AppContext from '../../ContextAPI/AppContext';

const FormInput = function () {
  const { setParams, setFirstTime } =  React.useContext(AppContext);

  const [inputParams, setInputParams] = React.useState({
    title: '',
    backgColor: '',
    icon: '',
    logoColor: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputParams({ ...inputParams, [name]: value });
  };

  const sendParams = () => {
    setParams(inputParams);
    setFirstTime(false);
    setInputParams({ 
    title: '',
    backgColor: '',
    icon: '',
    logoColor: ''
  })
  };

  return (
    <form onChange={ (e) => handleChange(e)}>
      <label htmlFor="title">Título</label>
      <input 
        type="text" 
        name="title" 
        id="title"
        readOnly={false}
        value={inputParams.title}
      />

      <label htmlFor="backgColor">Cor de fundo</label>
      <input 
        type="text" 
        name="backgColor" 
        id="backgColor"
        readOnly={false}
        value={inputParams.backgColor}
      />

      <label htmlFor="icon">Ícone</label>
      <input 
        type="text" 
        name="icon"
        id="icon"
        readOnly={false}
        value={inputParams.icon}
      />

      <label htmlFor="logoColor">Cor da logo</label>
      <input 
        type="text" 
        name="logoColor" 
        id="logoColor"
        readOnly={false}
        value={inputParams.logoColor}
      />

      <button
        type="button"
        onClick={() => sendParams()}
      >
        Criar ícone
      </button>
    </form>
  );
};

export default FormInput;
