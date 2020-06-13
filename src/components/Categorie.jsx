import React from "react";

import styled from 'styled-components';
import { FaCheckCircle } from "react-icons/fa";

const Madiv = styled.div`
  width: 50%;
  #categorie {
    flex: 1;
    height: 116px;
    padding: 15px;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid #77787b;
    text-align: center;

    h2 {
      color: #77787b;
      font-size: 14px;
      margin:25px;
    }
  }
`;

const Categorie = (props) => {

    return (
      <Madiv>
        <div
          className={props.isActive ? "red" : "white"}
          id="categorie"
          onClick={() => props.refreshListeCategorie(props.nom)}
        >
          <FaCheckCircle style={{ color: "white", float: "right" }} />
          <h2>{props.nom}</h2>
        </div>
      </Madiv>
    );
}

export default Categorie
