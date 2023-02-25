import React from 'react'

function AccueilImage(props) {
  return (
    <div className='AccueilImageDiv' id={props.styles} alt={props.alt}>
        <img src={props.image} alt="Img banner"/>
        <div className="banniere-sombre"></div>
        <h2>{props.title}</h2>
    </div>
  )
}

export default AccueilImage