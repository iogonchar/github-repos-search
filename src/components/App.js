import React from "react";

import { useLazyQuery } from "@apollo/client";
import { GET_REPOS } from "../queries/getRepos";

import SearchBar from "./SearchBar";
import Main from "./Main";

const App = () => {
  const [getRepos, { loading, data, fetchMore }] = useLazyQuery(GET_REPOS);

  const handleSearchRepos = (query) => {
    getRepos({variables: { query, after: null }});
  }

  const handleFetchMore = () => {
    console.log('AAA', data.search.pageInfo.endCursor);
    fetchMore({
      variables: {
        after: data.search.pageInfo.endCursor
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.search.edges = [
          ...prevResult.search.edges,
          ...fetchMoreResult.search.edges
        ];
        return fetchMoreResult;
      }
    })
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
            : <><p>ВСЕГО: {data.search.repositoryCount}</p><Main cards={data.search.edges} onFetchMore={handleFetchMore} /></>
      }
    </div>
  );
}

export default App;
