import React from "react";

import { useLazyQuery } from "@apollo/client";
import { GET_REPOS } from "../queries/getRepos";

import SearchBar from "./SearchBar";
import Main from "./Main";

const App = () => {
  const [getRepos, { loading, data }] = useLazyQuery(GET_REPOS);

  const handleSearchRepos = (query) => {
    getRepos({variables: { query }});
  }

  // if(loading) {
  //   return(<p>Грузим данные</p>)
  // }

  return (
    <div>
      <SearchBar onSearch={handleSearchRepos} />
      {
        loading
          ? <p>Поиск</p>
          : !data
            ? <p>Попробуйте поискать</p>
            : <Main cards={data.search.edges} />
      }


      {/* {
      !data
        ? <p>Ничего не найдено.</p>
        : <Main cards={data.search.edges} />
      } */}
    </div>
  );
}

export default App;
