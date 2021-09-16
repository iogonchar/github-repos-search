import React from "react";

const Card = (cards) => {
  return (
    <ul className="cards">
      {
        cards.cards.map((card) => (
          <li className="card">
            <h2 className="card__title">{card.node.nameWithOwner}</h2>
            <p className="card__description">{card.node.description}</p>
            <p className="card__main-lang">{card.node.primaryLanguage.name}</p>
            <p className="card__stars">{card.node.stargazerCount}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default Card;
