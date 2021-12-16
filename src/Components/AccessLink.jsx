import React from 'react';
import AppContext from '../ContextAPI/AppContext';
import generateLink from '../Utils/generateLink';
// import '../Styles/IconMessage.css';
import LinkAccess from './LinkAccess';
import styled from 'styled-components';

function AccessLink() {
  const { params, firstTime } = React.useContext(AppContext);
  const readyURL = generateLink(params);

  const Message = styled.p`
    height: 50px;
    color: aliceblue;
    text-align: center;
    padding: 10px;
    max-height: 25px;
    max-width: 50%;
    margin: 10px auto;
    background-color: #4CAF50;
    border-radius: 5px;
    cursor: not-allowed;
  `;
  
  return (
    firstTime ?
      <Message>Link de ícone ainda não gerado</Message>:
      <LinkAccess readyURL={readyURL} title={params.title} />
  )
}

export default AccessLink
