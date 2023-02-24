import React from "react";
import { useParams } from "react-router-dom";
import Star from "../../Components/Star";
import Carousel  from "../../Components/Carousel";
import Dropdown from "../../Components/Dropdown";
import Tags from "../../Components/Tags";
import ListeLogement from '../../Assets/logements.json';
import ErrorPage from "../../Pages/Erreur404";

import "../../Assets/Css/Utils/Variable/variable.css"
import "../../Assets/Css/Components/Carousel/carousel.css"
import "../../Assets/Css/Components/Dropdown/dropdown.css"
import "../../Assets/Css/Components/Tags/tags.css"
import "../../Assets/Css/Utils/Reset/reset.css"
import "../../Assets/Css/Pages/Fiche/fiche.css"

function Fiche() {
  // Récuparation ID du logement
  const { id } = useParams();
  const logementFiltre = ListeLogement.find((logement) => logement.id === id);
  if (logementFiltre === undefined) {
    return <ErrorPage />;
  }
  // Définition de l'élément pinkBtn avec caractéristiques logement
  const logementFiltreEquipement = logementFiltre.equipments.map(
    (Element, index) => {
      return (
        <>
          <p className={"dropdownDiv-Text"} key={index}>
            {Element}
          </p>
        </>
      );
    }
  );
  // Définition du nom + hachage nom prénom
  const logementFiltreName = logementFiltre.host.name;
  const slice = logementFiltreName.split(/(\s+)/);
  const first = slice[0];
  const last = slice[2];

  return (
    <>
      <main>
        <Carousel slides={logementFiltre.pictures} />
        <div className="intelContainer">
          <div className="intelContainerLogement">
            <h2>{logementFiltre.title}</h2>
            <h3>{logementFiltre.location}</h3>
            <span className="pinkBtnContainer">
              {logementFiltre.tags.map((Element, index) => (
                <Tags Caracteristiques={Element} key={index} />
              ))}
            </span>
          </div>
          <div className="intelContainerOwner">
            <span className="IntelContainerLandlord">
              <em className="Name">
                {first} <br /> {last}
              </em>
              <img
                className="Picture"
                src={logementFiltre.host.picture}
                alt={logementFiltreName}
              />
            </span>
            <Star ratings={logementFiltre.rating} />
          </div>
        </div>
        <div className="ButtonContainer">
          <div className="Dropdown-div">
            <Dropdown
              Texte={"Description"}
              principes={
                <p className={"dropdownDiv-Text"}>
                  {logementFiltre.description}
                </p>
              }
            />
          </div>
          <div className="Dropdown-div">
            <Dropdown
              Texte={"Equipements"}
              principes={logementFiltreEquipement}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Fiche