import React from 'react';
import styled from 'styled-components';


const FormInput = styled.input`
  &:disabled {
    // background-color: #f5f5f5;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function IconInputs(props) {
  const { inputParams } = props;
  const [disabledInput, setDisabledInput] = React.useState(true);

  const manageIconColorInput = async (e) => {
    const { value } = e.target;

    if(value === '') {
      setDisabledInput(true);
    } else {
      setDisabledInput(false);
    }
  };

  return (
    <>
      <label className="inputLabel" htmlFor="icon">
        <span className='inputTitle'>
          Ícone de exibição
        </span>
        <FormInput
          className="input"
          onChange={ (e) => manageIconColorInput(e) }
          type="text" 
          name="icon"
          id="icon"
          placeholder="Ex: google"
          value={inputParams.icon}
          autoComplete="off"
        />
      </label>
      
      <label className="inputLabel" htmlFor="logoColor">
        <span className='inputTitle'>
          Cor do ícone
        </span>
      <FormInput
        className="input" 
        type="text" 
        name="logoColor" 
        id="logoColor"
        placeholder="Cor em inglês ou hexadecimal (sem #)"
        value={inputParams.logoColor}
        autoComplete="off"  
        disabled={disabledInput}
      />
      </label>
    </>
  );
}

export default IconInputs;
