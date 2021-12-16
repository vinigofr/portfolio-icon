import React from 'react';
import '../Styles/LinkButton.css';

function LinkAccess(props) {
  const { readyURL, title } = props;

  const link = <a
    className="accessIconButton"
    href={readyURL}
    target="_blank"
    rel="noreferrer"
  >
    {`Acessar ícone de ${title}`}
  </a>

  return (link)
}

export default LinkAccess;
