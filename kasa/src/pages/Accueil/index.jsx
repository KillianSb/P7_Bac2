import React from "react";
import { Link } from 'react-router-dom'
import Banniere from "../../components/Banniere/";
import ListeLogement from "../../assets/logements.json";
import Tuile from "../../components/Tuile/tuile";

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