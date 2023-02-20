import React from 'react'
import imageBanner from '../../Assets/Images/Banniere.png';

function AccueilImage() {
  return (
    <div className='AccueilImageDiv' alt="rivages rocheux avec forêt">
        <img src={imageBanner} alt="Img banner"/>
        <div className="banniere-sombre"></div>
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default AccueilImage