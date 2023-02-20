import React from "react";
import { Link } from "react-router-dom";

import "../../Assets/Css/Pages/Error/error.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"

function Erreur() {
    return (
        <>
          <div className="page-404">
            <h1 className="titre-404">404</h1>
            <span className="description-404">
              Oups! La page que vous demandez n'existe pas.
            </span>
            <Link to="/" className="retour">
              Retourner sur la page d'accueil
            </Link>
          </div>
        </>
    );
}
 
export default Erreur