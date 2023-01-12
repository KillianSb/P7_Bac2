import logo from '../assets/logo.png'
import '../styles/Header.css'

function Banner() {
    return (
        <div className='kasa-header'>
            <nav className='navs-header'>
                <p className='nav-header-accueil'>Accueil</p>
                <p className='nav-header-a-propos'>A Propos</p>
            </nav>
            <img src={logo} alt='Kasa' className='kasa-logo' />
        </div>
    )
}

export default Banner