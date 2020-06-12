import React from "react";

import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const ButtonStyle = styled.button`
  ${media.phone} {
    width: 100%;
    margin: 0 auto;
    height: 50px;
    border-radius: 20px;
    border: none;
  }
`;

function Button({ namebutton, backgroundbutton, color }) {
  return (
    <div>
      <ButtonStyle
        style={{ background: `${backgroundbutton}`, color: `${color}` }}
      >
        {namebutton}
      </ButtonStyle>
    </div>
  );
}

export default Button;
