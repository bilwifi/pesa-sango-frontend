import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const ButtonStyle = styled.div`
  button {
    ${media.phone} {
      width: 100%;
      margin: 0 auto;
      height: 50px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }
  }
`;

function Button({ namebutton, backgroundbutton, color, lien }) {
  return (
    <div>
      <ButtonStyle>
        <Link to={lien}>
          <button
            style={{ background: `${backgroundbutton}`, color: `${color}` }}
          >
            {namebutton}
          </button>
        </Link>
      </ButtonStyle>
    </div>
  );
}

export default Button;
