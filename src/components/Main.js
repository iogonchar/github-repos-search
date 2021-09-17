import React from "react";

import Card from "./Card";

const Main = ({ cards }) => {
  return (
    !cards.length
      ? <p>Ничего не найдено</p>
      : <ul className="cards">
          {
            cards.map((card) => (
              <Card
                key={card.node.id}
                card={card}
              />
            ))
          }
        </ul>
  );
}

export default Main;
