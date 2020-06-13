import React from "react";

import styled from "styled-components";
import { FaEye, FaHeart } from "react-icons/fa";

const CardStyled = styled.div`
  .contenu {
    display: flex;
    justify-content: space-between;
  }
  .reaction {
    display: flex;
    justify-content: space-between;

    i {
      padding: 5px;
    }
  }
`;
const Img = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 20px;
`;
const Text = styled.p`
  font-size: 0.7rem;
  text-align: left;
  margin-left: 10px;
`;

const CardUi = (props) => {
  const { image, description } = props;
  return (
    <CardStyled>
      <div className="contenu">
        <Img src={image} alt="image" />
        <Text> {description} </Text>
      </div>
      <div className="reaction">
        <i>
          <FaEye style={{ marginRight: "10px" }} />
          <span>1227</span>
        </i>
        <i>
          <span>2</span>
          <FaHeart style={{ marginLeft: "10px", color: "red" }} />
        </i>
      </div>
    </CardStyled>
  );
};

export default CardUi;
