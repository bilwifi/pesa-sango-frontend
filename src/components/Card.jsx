import React from "react";

import { FaEye, FaHeart, FaShareSquare, FaArrowLeft } from "react-icons/fa";
import data from "./data";
import Wrapper from "./Wrapper";

import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

const Container = styled.div`
  padding: 10px;

  .reaction {
    display: flex;
    justify-content: space-between;

    i {
      padding: 5px;
    }
  }
`;
const Text = styled.p`
  font-size: 1rem;
  text-align: left;
`;

function Card({ match }) {
  const id = match.params.id;
  const items = data.find((item) => item.id === id);
  return (
    <Wrapper>
      <Container>
        <h2>
          <span>
            <i>
              <a href="/listes-plaintes">
                <FaArrowLeft
                  style={{
                    fontSize: "1.5rem",
                    color: "#c80000",
                    position: "relative",
                    top: "-4px",
                  }}
                />
              </a>
            </i>
          </span>{" "}
          Details
        </h2>
        <br />
        <Img src={items.image} alt="image" /> <br />
        <div className="reaction">
          <i>
            <FaEye style={{ marginRight: "10px" }} />
            <span>1227</span>
          </i>
          <i>
            <span>2</span>
            <FaHeart style={{ marginLeft: "10px", color: "red" }} />
            <FaShareSquare style={{ marginLeft: "10px" }} />
          </i>
        </div>
        <div>
          <strong>Ville : </strong> {items.ville}
        </div>
        <div>
          <strong>Commune : </strong> {items.commune}
        </div>
        <div>
          <strong>Categorie : </strong> {items.categorie}
        </div>
        <div>
          <h5>Description</h5>
          <Text>{items.description}</Text>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Card;
