import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="content">
      <h1>Здесь ничего нет</h1>
      <Link to="/" className="button">Вернуться к поиску</Link>
    </section>
  );
}

export default PageNotFound;
