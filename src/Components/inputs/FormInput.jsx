import React from 'react';
import '../../Styles/FormInput.css';
import '../../Styles/Button.css';
import AppContext from '../../ContextAPI/AppContext';
import IconInputs from '../IconInputs';
import styled from 'styled-components';

const ButtonOptions = styled.button`
  background-color: #4CAF50;
  border: none;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 5px;
  border: 1px solid #4CAF50;

  &hover: {
    background-color: rgb(255, 255, 255);
    color: #4CAF50;
  }
`;

const FormInput = function () {
  const { setParams, setFirstTime } =  React.useContext(AppContext);

  const [inputParams, setInputParams] = React.useState({
    title: '',
    backgColor: '',
    icon: '',
    logoColor: '',
  });

  const [filled, setFilled] = React.useState(false);
  const [editableIcon, setEditableIcon] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputParams({ ...inputParams, [name]: value });    
  };

  const iconInput = inputParams.icon;
  React.useEffect(() => {
    if(iconInput === '') setInputParams({ ...inputParams, logoColor: '' });
  } , [iconInput]);

  const sendParams = () => {
    if (
      !inputParams.title      ||
      !inputParams.backgColor ||
      (!inputParams.icon && editableIcon)) {
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

  const IconFormFunction = () => {
    setEditableIcon(!editableIcon);

    if (!editableIcon) {
      setInputParams({
        ...inputParams,
        icon: '',
        logoColor: ''
      });
    };
  };

  const style = { boxShadow: '0 0 1px 1px red' };

  return (
    <>
    <form onChange={ (e) => handleChange(e)} className="formInput">
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
      {
        editableIcon &&
        <IconInputs
          inputParams={ inputParams }
          setInputParams={ setInputParams }
          emptyColor={ filled && !inputParams.icon ? { style } : null}
        />
      }
      <ButtonOptions
        type="button"
        onClick={ () => IconFormFunction() }>
         {`${ editableIcon ? 'Desabilitar opção de' : 'Habilitar opção de' }`} ícones
      </ButtonOptions>
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
