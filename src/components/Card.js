import React from "react";

const Card = ({ card, onRepositoryClick }) => {

  const handleRepositoryClick = () => {
    onRepositoryClick(card);
  }

  return (
    <li className="card" onClick={handleRepositoryClick}>
      <h2 className="card__title">{card.node.nameWithOwner}</h2>
      <p className="card__description">{card.node.description}</p>
      <p className="card__main-lang">{card.node.primaryLanguage ? card.node.primaryLanguage.name : 'Не указан'}</p>
      <p className="card__stars">{card.node.stargazerCount}</p>
    </li>
  );
}

export default Card;
