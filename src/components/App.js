import React from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

import { useLazyQuery } from "@apollo/client";
import { GET_REPOS } from "../queries/getRepos";

import SearchBar from "./SearchBar";
import Main from "./Main";
import Repository from "./Repository";

const App = () => {
  const history = useHistory();
  const [getRepos, { loading: repositoriesQueryLoading, data: repositories, fetchMore }] = useLazyQuery(GET_REPOS);

  const handleSearchRepos = (query) => {
    getRepos({variables: { query, after: null }});
  }

  const handleFetchMore = () => {
    console.log('AAA', repositories.search.pageInfo.endCursor);
    fetchMore({
      variables: {
        after: repositories.search.pageInfo.endCursor
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

  const handleRepositoryClick = (card) => {
    history.push({
      pathname: '/repository',
      state: card
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SearchBar onSearch={handleSearchRepos} />
          {
            repositoriesQueryLoading
              ? <p>Поиск</p>
              : !repositories
                ? <p>Попробуйте поискать</p>
                : <><p>ВСЕГО: {repositories.search.repositoryCount}</p><Main cards={repositories.search.edges} onFetchMore={handleFetchMore} onRepositoryClick={handleRepositoryClick} /></>
          }
        </Route>
        <Route path="/repository" component={Repository} />
      </Switch>

    </div>
  );
}

export default App;
