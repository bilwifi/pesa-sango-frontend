import React from "react";

import { Jumbotron as Jumbo, Container } from "reactstrap";
import styled from "styled-components";

import image from "../images/homepage.jpg";

import Header from "./Header";
import Button from "./Button";

const HomeStyle = styled.div`
  .jumbotron {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    height: 90vh;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: O;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .main {
    position: relative;
    top: 100px;
    h2 {
      color: white;
      font-weight: 500;
      margin-bottom: 100px;
      text-transform: uppercase;
    }
  }
`;

function Home() {
  return (
    <HomeStyle>
      <Header />
      <Jumbo fluid className="jumbotron">
        <div className="overlay"></div>
        <Container>
          <div className="main">
            <h2 className="text-center">
              Notre but et de faire entendre vos voix
            </h2>
            <Button
              className="button"
              namebutton="signaler un probleme"
              backgroundbutton="#c80000"
              color="white"
            />{" "}
            <br />
            <Button
              className="button"
              namebutton="voire les signalements"
              backgroundbutton="white"
              color="#c80000"
            />
          </div>
        </Container>
      </Jumbo>
    </HomeStyle>
  );
}

export default Home;
