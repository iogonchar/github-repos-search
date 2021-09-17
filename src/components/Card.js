import React from "react";

const Card = ({ card, onRepositoryClick }) => {

  const handleRepositoryClick = () => {
    onRepositoryClick(card);
  }

  return (
    <li className="card" onClick={handleRepositoryClick}>
      <h2 className="card__title">{card.node.nameWithOwner}</h2>
      <p className="card__description">{card.node.description}</p>
      {
        card.node.primaryLanguage
          ? <p className="card__main-lang">
              <span className="card__main-lang-color" style={{backgroundColor: card.node.primaryLanguage.color}}></span>
              { card.node.primaryLanguage.name }
            </p>
          : <p className="card__main-lang">Язык репозитория не указан</p>
      }
      {/* <p className="card__main-lang">{card.node.primaryLanguage ? card.node.primaryLanguage.name : 'Не указан'}</p> */}
      <p className="card__stars">Stars: {card.node.stargazerCount}</p>
    </li>
  );
}

export default Card;
