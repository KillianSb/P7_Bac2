import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from '../Pages/Accueil';
import Fiche from '../Pages/Fiche';
import APropos from '../Pages/Apropos';
import Erreur from '../Pages/Erreur404';

export default function RoutesApp() {
    return (
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path={`/logement/:id`} element={<Fiche />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    );
}