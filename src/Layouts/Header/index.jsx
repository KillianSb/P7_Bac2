import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../Assets/Images/profile.png"

import "../../Assets/Css/Layouts/Header/header.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo Kasa rouge"></img>
            <div className="Header-div">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">A Propos</NavLink>
            </div>
        </header>
    )
}

export default Header