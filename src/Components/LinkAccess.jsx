import React from 'react';
import styled from 'styled-components';

function LinkAccess(props) {
  const { readyURL, title } = props;
  const [copy, setCopy] = React.useState(false);

  const Button = styled.button`
    display: block;
    color: aliceblue;
    ${ copy ? 'font-weight: bold;' : '' }
    text-align: center;
    font-size: 16px;
    width: 220px;
    background-color: #4CAF50;;
    border-radius: 5px;
    margin: 10px auto;
    text-decoration: none;
    height: 50px;
    border-style: none;
    &:hover {
      background-color: #3e8e41;
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
    }
  `;

  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const copyToClipBoard  = () => {
    navigator.clipboard.writeText(readyURL);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <Button
      onClick={ () => copyToClipBoard() }
    >
      { copy ? 'Copiado! ✅' : `Copiar link de ${title}` }
    </Button>
    );
}

export default LinkAccess;
