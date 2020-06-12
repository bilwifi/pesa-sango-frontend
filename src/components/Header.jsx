import React, { useState } from "react";

import styled from "styled-components";
import { Row, Col } from "reactstrap";

import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

const HeaderStyle = styled.header`
  width: 100%;
  background-color: white;
  padding: 20px;
`;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <HeaderStyle>
        <Row>
          <Col>
            <div>
              <h5>LOGO</h5>
            </div>
          </Col>
          <Col>
            <div style={{ position: "relative", left: "80px" }}>
              <Burger open={open} setOpen={setOpen} />
            </div>
          </Col>
        </Row>
      </HeaderStyle>
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
