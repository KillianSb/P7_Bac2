import React, { useState } from 'react'
import Fleche from "../../Assets/Images/FlecheCarousel.png"

function Caroutest({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const  nextSlide = () =>{
      // current = lenght-1 => then reset to 0 or +1
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const  prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
  return (
    <>
    <div id="carouselExampleControls" className="carousel_slide" data-ride="carousel">
        {slides.map((slide,index) =>{
            return (
                <div className={index === current ? "carousel-Item" : "slide"} key={index}>
                    {index === current && (
                    <img className="d-block" src={slide} alt="Présentation logement" key={index}/>
                    )}
                </div>
            )
            })
        }
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" onClick={prevSlide} data-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <img className='leftArrow'src={Fleche} alt='Fleche direction précédent'/>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" onClick={nextSlide} data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <img className="rightArrow" src={Fleche} alt='Fleche direction suivant'/>
        </a>
    </div>
    </>
  )
};

export default Caroutest