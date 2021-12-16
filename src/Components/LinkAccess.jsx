import React from 'react';
import styled from 'styled-components';

function LinkAccess(props) {
  const { readyURL, title } = props;

  const Button = styled.button`
    display: block;
    color: aliceblue;
    text-align: center;
    padding: 10px;
    max-width: 50%;
    max-height: 25px;
    background-color: #4CAF50;;
    border-radius: 5px;
    margin: 10px auto;
    text-decoration: none;
    height: 50px;

    &:hover {
      background-color: #3e8e41;
    }
  `;

  return (
    <Button
      as="a"
      href={readyURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {`Acessar ícone de ${title}`}
    </Button>
    );
}

export default LinkAccess;
