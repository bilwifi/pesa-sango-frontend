import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { AffichageStyle, Container } from "./AffochageStyle";
import Categorie from "../components/Categorie";
import Button from "../components/Button";

const categories = [
  {
    id: 1,
    nom: "Santé",
  },
  {
    id: 2,
    nom: "Education",
  },
  {
    id: 3,
    nom: "Infrastructure",
  },
  {
    id: 4,
    nom: "Industrie",
  },
  {
    id: 5,
    nom: "Tourisme",
  },
  {
    id: 6,
    nom: "Affaire Foncière",
  },
  {
    id: 7,
    nom: "Fonction Publique",
  },
  {
    id: 8,
    nom: "Environnement",
  },
];

const Affichage = () => {
     const [listeCategorie, setListeCategorie] = useState([]);

    const refreshListeCategorie = (nom) => {
        let liste = [...listeCategorie];
        if (!listeCategorie.includes(nom)) {
            liste.push(nom);
        } else {
            liste = listeCategorie.filter((item) => item !== nom);
        }
        setListeCategorie(liste);
        console.log(liste);
    };

    const handleFormSubmit = ()=>{
        // ONCLIC/ ELEMENTS SELECT [ ] TO LISTE DE SIGNALEMENT comme (paramètre) POUR AFFICHAGE
    }

  return (
    <Wrapper>
      <AffichageStyle>
        <main>
          <div className="titre">
            <h2>Afficher par catégories</h2>
          </div>
          <div className="categories">
            {categories.map((categorie) => (
              <Categorie
                key={categorie.id}
                nom={categorie.nom}
                refreshListeCategorie={refreshListeCategorie}
                isActive={listeCategorie.includes(categorie.nom)}
              />
            ))}
          </div>

          <div className="lienSignalements">
            <NavLink id="lien" to="/listes-plaintes">
              <h4>Voir tous les signalements</h4>
            </NavLink>
          </div>
          <Container>
            <Button
              onClick={handleFormSubmit}
              lien="/listes-plaintes"
              namebutton="Valider"
              backgroundbutton="#d91438"
              color="white"
            />
          </Container>
        </main>
      </AffichageStyle>
    </Wrapper>
  );
};

export default Affichage;
