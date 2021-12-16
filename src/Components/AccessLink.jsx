import React from 'react';
import AppContext from '../ContextAPI/AppContext';
import generateLink from '../Utils/generateLink';
import '../Styles/IconMessage.css';
import LinkAccess from './LinkAccess';

function AccessLink() {
  const { params, firstTime } = React.useContext(AppContext);
  const readyURL = generateLink(params);

  const message = <p className='iconMessage'>Link de ícone ainda não gerado</p>;

  return (
    firstTime ?
      message :
      <LinkAccess readyURL={readyURL} title={params.title} />
  )
}

export default AccessLink
