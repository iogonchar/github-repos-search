import React from 'react';

import Card from './Card';

const Main = ({ cards, searchResultsCount, onFetchMore, onRepositoryClick }) => {
  return (
    !cards.length
      ? <h2 className="content__notification">По вашему запросу ничего не найдено :'(</h2>
      : <>
          <h2 className="content__notification">Найдено репозиториев: { searchResultsCount }</h2>
          <ul className="cards">
            {
              cards
                // remove duplicate cards
                .filter((card, index) => {
                  return index === cards.indexOf(card);
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
          <button className="button" type="button" onClick={onFetchMore}>Загрузить ещё</button>
        </>
  );
}

export default Main;
