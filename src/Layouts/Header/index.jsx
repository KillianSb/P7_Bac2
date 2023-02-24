import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Images/profile.png"

import "../../Assets/Css/Layouts/Header/header.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo Kasa rouge"></img>
            <div className="Header-div">
                <Link to="/">Accueil</Link>
                <Link to="/apropos">A Propos</Link>
            </div>
        </header>
    )
}

export default Header