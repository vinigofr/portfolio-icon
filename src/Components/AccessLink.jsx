import React from 'react';
import AppContext from '../ContextAPI/AppContext';
import generateLink from '../Utils/generateLink';

function AccessLink() {
  const { params, firstTime } = React.useContext(AppContext);
  const readyURL = generateLink(params);

  const message = <p>Ícone ainda não gerado</p>;
  const link = <a
  target="_blank"
  href={readyURL}
  rel="noreferrer"
  >
    {`Acessar ícone de ${params.title}`}
  </a>

  return (
    <div className='accessLink'>
      { firstTime ? message : link }
    </div>
  )
}

export default AccessLink
