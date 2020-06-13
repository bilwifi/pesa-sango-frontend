import React from "react";

import Wrapper from "./Wrapper";
import { Jumbotron as Jumbo, Container } from "reactstrap";
import styled from "styled-components";

import image from "../images/homepage.jpg";

import Button from "./Button";

const HomeStyle = styled.div`
  .jumbotron {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    height: 90vh;
    position: relative;
    z-index: -2;
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
  .slogan{
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
`;

function Home() {
  return (
    <HomeStyle>
      <Wrapper>
        <Jumbo fluid className="jumbotron">
          <Container>
            <div className="main">
              <h2 className="text-center slogan">
                Notre but et de faire entendre votre voix
              </h2>
              <div>
                <Button
                  namebutton="signaler un probleme"
                  backgroundbutton="#c80000"
                  color="white"
                  lien="/plaintes"
                />{" "}
                <br />
                <Button
                  namebutton="voire les signalements"
                  backgroundbutton="white"
                  color="#c80000"
                  lien="/listes-plaintes"
                />
              </div>
            </div>
          </Container>
        </Jumbo>
      </Wrapper>
    </HomeStyle>
  );
}

export default Home;
