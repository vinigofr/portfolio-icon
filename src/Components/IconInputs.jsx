import React from 'react';
import styled from 'styled-components';

const FormInput = styled.input`
  &:disabled {
    background-color: #ad8989;
    opacity: 0.3;
    cursor: not-allowed;
    color: #fff;
  }
`;

function IconInputs(props) {
  const { inputParams, emptyColor } = props;
  const [disabledInput, setDisabledInput] = React.useState(true);

  const manageIconColorInput = async (e) => {
    const { value } = e.target;

    if (value === '') {
      setDisabledInput(true);
    } else {
      setDisabledInput(false);
    }
  };

  return (
    <>
        <label className="inputLabel" htmlFor="icon" id="icon-field">
        <span className='inputTitle'>
          Ícone de exibição
        </span>
        <FormInput
          className="input"
          onChange={(e) => manageIconColorInput(e)}
          type="text"
          name="icon"
          id="icon"
          placeholder="Ex: google"
          {...emptyColor}
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
