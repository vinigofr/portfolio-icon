import React from 'react'
import AppContext from '../ContextAPI/AppContext';

function Preview() {
  const { params } = React.useContext(AppContext);
  // console.log({ params }); os params chegam por aqui
  return (
    <div className='iconPreview'>
      <div className='iconPreview__container'>
        <div className='iconPreview_icon'></div>
        <div className='iconPreview_text'>Preview</div>
      </div>
    </div>
  )
}

export default Preview
