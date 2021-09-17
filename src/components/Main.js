import React from "react";

import Card from "./Card";

const Main = ({ cards, onFetchMore, onRepositoryClick }) => {
  return (
    !cards.length
      ? <p>Ничего не найдено</p>
      : <>
      <ul className="cards">
          {
            cards
            .filter((card, idx) => {
              return idx === cards.indexOf(card);
            })
            .map((card) => (
              <Card
                key={card.node.id}
                card={card}
                onRepositoryClick={onRepositoryClick}
              />
            ))
          }
        </ul>
        <button onClick={onFetchMore}>ЕЩЕЩЕЩЕ</button>
        </>
  );
}

export default Main;
