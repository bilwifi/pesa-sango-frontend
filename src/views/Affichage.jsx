import React, { useState } from "react";

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
    let liste = listeCategorie;
    if (listeCategorie.includes(nom)) {
      liste.push(nom);
    } else {
      liste.splice(nom);
    }
    setListeCategorie(listeCategorie);
  };
  return (
    <Wrapper>
      <AffichageStyle>
        <main>
          <div className="titre">
            <h2>Afficher par catégories</h2>
          </div>
          <div className="categories">
            {categories.map((categorie) => (
              <Categorie nom={categorie.nom} />
            ))}
          </div>
          <div className="lienSignalements">
            <a href="listes-plaintes">Voir tous les signalements</a>
          </div>
          <Container>
            <Button
              onClick={refreshListeCategorie}
              namebutton="Valider"
              backgroundbutton="red"
              color="white"
            />
          </Container>
        </main>
      </AffichageStyle>
    </Wrapper>
  );
};

export default Affichage;
