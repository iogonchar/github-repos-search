import React from 'react';
import { useHistory } from 'react-router-dom';

const Repository = (props) => {
  const history = useHistory();
  return (
    <section className="content">
      <h1 className="content__title">Информация о репозитории</h1>
      <ul className="repository">
        <li className="repository__item">{ props.location.state.node.nameWithOwner }</li>
        <li className="repository__item">{ props.location.state.node.description }</li>
        <li className="repository__item">
          {
            props.location.state.node.languages.nodes.length > 0
              ? props.location.state.node.languages.nodes.map((item) =>
                  <p className="repository__lang" key={item.color}>
                    <span className="repository__lang-color" style={{backgroundColor: item.color}}></span>
                    { item.name }
                  </p>
                )
              : 'Язык репозитория не указан.'
          }
        </li>
        <li className="repository__item">Stars: { props.location.state.node.stargazerCount }</li>
        <li className="repository__item">Issues: { props.location.state.node.issues.totalCount }</li>
        <li className="repository__item">Pull Requests: { props.location.state.node.pullRequests.totalCount }</li>
      </ul>
      <button className="button" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default Repository;
