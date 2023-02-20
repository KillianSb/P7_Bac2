import React from "react";
import { Link } from 'react-router-dom'
import Banniere from "../../Components/Banniere/";
import ListeLogement from "../../Assets/logements.json";
import Tuile from "../../Components/Tuile/tuile";

import "../../Assets/Css/Components/Banniere/banniere.css"
import "../../Assets/Css/Components/Tuile/tuile.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"

function Accueil() {
    return (
    <>
        <Banniere />
        <section className="Tuile-div-container">
            {ListeLogement.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`}>
                <Tuile
                    key={logement.id}
                    id={logement.id}
                    image={logement.cover}
                    titre={logement.title}
                    description={logement.description}
                />
                </Link>
            ))}
        </section>
    </>
    );
}

export default Accueil