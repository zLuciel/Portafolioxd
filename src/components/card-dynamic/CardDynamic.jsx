import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CardDynamic.css"
const CardDynamic = ({titulo,texto,faImages}) => {
  return (
    <div className='card'>
         <div className="icon">
            <div className='iconos'><FontAwesomeIcon icon={faImages} className="faImages"/></div> 
            <div className="titulo-card">
             {titulo}
             </div>
         </div>
         
         <div className="text-card">
             <div className='text'>{texto}</div>
             <div className="ver-card">
             KNOW MORE 
         </div>
         </div>
      </div>
  )
}

export default CardDynamic
