import React from "react";

import { Link } from "react-router-dom";
import CardUi from "./CardUi";

import data from "./data";

function Cards() {
  return (
    <div>
      {data.map((item, index) => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/listes-plaintes/${item.id}`}
        >
          <CardUi
            key={index}
            image={item.image}
            description={item.description}
          />
        </Link>
      ))}
    </div>
  );
}

export default Cards;
