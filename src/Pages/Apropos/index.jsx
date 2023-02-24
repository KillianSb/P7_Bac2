
import React from "react";
import 'react-router-dom'
import Dropdown from "../../Components/Dropdown/index"

import "../../Assets/Css/Components/Dropdown/dropdown.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Utils/Variable/variable.css"


function Apropos(Texte, principes, index) {
    return (
    <>
      <main>
        <div className="pageContainer">
          <Dropdown
            Texte={"Fiabilité"}
            principes={
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
            key={index}
          />
          <Dropdown
            Texte={"Respect"}
            principes={
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            }
            key={index}
          />
          <Dropdown
            Texte={"Service"}
            principes={
              <p>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            }
            key={index}
          />
          <Dropdown
            Texte={"Responsabilité"}
            principes={
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
            key={index}
          />
        </div>
      </main>
    </>
    );
}

export default Apropos