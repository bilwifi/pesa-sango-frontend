import React from "react";

import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Cards from "../components/Cards";

const ListeStyle = styled.div`
  padding: 10px;

  h1 {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }
`;

function Listes() {
  return (
    <Wrapper>
      <ListeStyle>
        <br />
        <h1>Listes des signalements</h1>
        <Cards />
        <Button
          namebutton="afficher par categorie"
          backgroundbutton="#c80000"
          color="white"
          lien="/affichage"
        />
      </ListeStyle>
    </Wrapper>
  );
}

export default Listes;
