import React from 'react';
import AppContext from '../ContextAPI/AppContext';
import generateLink from '../Utils/generateLink';
// import '../Styles/IconMessage.css';
import LinkAccess from './LinkAccess';

function AccessLink() {
  const { params, firstTime } = React.useContext(AppContext);
  const readyURL = generateLink(params);

  return (
    !firstTime && <LinkAccess readyURL={readyURL} title={params.title} />
  )
}

export default AccessLink
