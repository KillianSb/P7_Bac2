import image from '../assets/sous_banner.png'
import background from '../assets/Background.png'
import '../styles/Body.css'

function _Body() {
    return (
        <div className='_body'>
            <div className='_section1'>
                <p className='texte-section1'>Chez vous, partout et ailleurs</p>
                <div className='groupe-image-section1'>
                    <img className='image-background-section1' src={background} alt='Kasa' />
                    <img className='image-section1' src={image} alt='Kasa' />
                </div>
            </div>
        </div>


        // <div className='sous-banner'>
        //     <img src={image} alt='Kasa' className='sous-banner-image' />
        //     <nav className='box-texte-sous-banner'>
        //         <p className='texte-sous-banner'>Chez vous, partout et ailleurs</p>
        //     </nav>
        // </div>
    )
}

export default _Body