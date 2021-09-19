import React, { useState } from "react";

import searchIcon from '../images/search.svg';

const SearchBar = ({ onSearch, query, onQueryChange }) => {
  // const [query, setQuery] = useState('');

  // const handleQueryChange = (e) => {
  //   setQuery(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(query);
  }

  return (
    <div className="search">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          placeholder="Seacrh some repos"
          onChange={onQueryChange}
          value={query || ''}
          required
          maxLength="100"
        />
        <button className="form__submit">
          <img className="form__search-icon" src={searchIcon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
