import React from "react";

import searchIcon from '../images/search.svg';

const SearchBar = () => {
  return (
    <div className="search">
      <form className="form">
        <input className="form__input" placeholder="Seacrh some repos" />
        <button className="form__submit">
          <img className="form__search-icon" src={searchIcon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
