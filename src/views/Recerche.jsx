import React from "react";
import { Container, Input } from "semantic-ui-react";
import Header from "../components/Header";

const Recherche = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Rechercher</h1>
        {/* <Form> */}
        <Input fluid icon="search" placeholder="Rechercher" />
        {/* </Form> */}
      </Container>
    </>
  );
};

export default Recherche;
