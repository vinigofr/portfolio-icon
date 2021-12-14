import React from 'react';
import AppContext from '../../ContextAPI/AppContext';

const FormInput = function () {
  const { setUrl } =  React.useContext(AppContext);

  const [params, setParams] = React.useState({
    title: '',
    backgColor: '',
    icon: '',
    titleColor: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParams({ ...params, [name]: value });
  };

  return (
    <form onChange={ (e) => handleChange(e)}>
      <label for="title">Título</label>
      <input type="text" name="title" id="title" />

      <label for="backgColor">Cor de fundo</label>
      <input type="text" name="backgColor" id="backgColor" />

      <label for="icon">Ícone</label>
      <input type="text" name="icon" id="icon" />

      <label for="titleColor">Cor do título</label>
      <input type="text" name="titleColor" id="titleColor" />

      <button type="button" onClick={() => setUrl(params)}>Criar ícone</button>
    </form>
  );
};

export default FormInput;
