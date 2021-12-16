import React from 'react';
import '../../Styles/FormInput.css';
import '../../Styles/Button.css';
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
    <>
    <form onChange={ (e) => handleChange(e)} className="formInput">
      <label className="inputLabel" htmlFor="title">
        <span className='inputTitle'>Título</span>
        <input
          className="input"
          type="text" 
          name="title" 
          id="title"
          placeholder="Ex: google"
          readOnly={false}
          value={inputParams.title}
        />
      </label>
      

      <label className="inputLabel" htmlFor="backgColor">
        <span className='inputTitle'>Cor de fundo</span>
        <input
          className="input" 
          type="text" 
          name="backgColor" 
          id="backgColor"
          readOnly={false}
          placeholder="Inglês ou hexadecimal(sem #)"
          value={inputParams.backgColor}
        />
      </label>
      

      <label className="inputLabel" htmlFor="icon">
        <span className='inputTitle'>Ícone</span>
        <input
          className="input" 
          type="text" 
          name="icon"
          id="icon"
          placeholder="Ex: google"
          readOnly={false}
          value={inputParams.icon}
        />
      </label>
      

      <label className="inputLabel" htmlFor="logoColor">
        <span className='inputTitle'>Cor do ícone</span>
      <input
        className="input" 
        type="text" 
        name="logoColor" 
        id="logoColor"
        placeholder="Inglês ou hexadecimal (sem #)"
        readOnly={false}
        value={inputParams.logoColor}
      />
      </label>
    </form>
    <button
        type="button"
        onClick={() => sendParams()}
        className="createIconButton"
      >
        Criar ícone
      </button>
    </>
  );
};

export default FormInput;
