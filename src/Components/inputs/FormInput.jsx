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

  const [filled, setFilled] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputParams({ ...inputParams, [name]: value });
  };

  const sendParams = () => {
    if (
      !inputParams.title     ||
      !inputParams.backgColor||
      !inputParams.icon      ||
      !inputParams.logoColor) {
      setFilled(true);
      setTimeout(() => {
        setFilled(false);
      }, 3000);
    } else {
      setParams(inputParams);
      setFirstTime(false);
      setInputParams({ 
      title: '',
      backgColor: '',
      icon: '',
      logoColor: ''
    });
    }
  };

  const style = { boxShadow: '0 0 1px 1px red' }

  return (
    <>
    <form onChange={ (e) => handleChange(e)} className="formInput">
    <label className="inputLabel" htmlFor="icon">
        <span className='inputTitle'>Ícone de exibição</span>
        <input
          { ...filled && !inputParams.icon ? { style } : null }
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
        { ...filled && !inputParams.logoColor ? { style } : null }
        className="input" 
        type="text" 
        name="logoColor" 
        id="logoColor"
        placeholder="Cor em inglês ou hexadecimal (sem #)"
        readOnly={false}
        value={inputParams.logoColor}
      />
      </label>

      <label className="inputLabel" htmlFor="title">
        <span className='inputTitle'>Título</span>
        <input
          { ...filled && !inputParams.title ? { style } : null }
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
          { ...filled && !inputParams.backgColor ? { style } : null }
          className="input" 
          type="text" 
          name="backgColor" 
          id="backgColor"
          readOnly={false}
          placeholder="Cor em inglês ou hexadecimal (sem #)"
          value={inputParams.backgColor}
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
