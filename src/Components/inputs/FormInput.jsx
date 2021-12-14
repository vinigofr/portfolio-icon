import React from 'react';
import AppContext from '../../ContextAPI/AppContext';

const FormInput = function () {
  const { setParams } =  React.useContext(AppContext);

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

  return (
    <form onChange={ (e) => handleChange(e)}>
      <label for="title">Título</label>
      <input type="text" name="title" id="title" />

      <label for="backgColor">Cor de fundo</label>
      <input type="text" name="backgColor" id="backgColor" />

      <label for="icon">Ícone</label>
      <input type="text" name="icon" id="icon" />

      <label for="logoColor">Cor da logo</label>
      <input type="text" name="logoColor" id="logoColor" />

      <button type="button" onClick={() => setParams(inputParams)}>Criar ícone</button>
    </form>
  );
};

export default FormInput;
