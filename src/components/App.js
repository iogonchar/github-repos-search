import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_REPOS } from "../queries/getRepos";

import SearchBar from "./SearchBar";
import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([]);

  const  { loading, error, data } = useQuery(GET_REPOS);

  useEffect(() => {
    if (!loading) {
      setCards(data.search.edges);
    }
  }, [data])

  if (loading) {
    return (<h1>LOADING...</h1>)
  }

  return (
    <div>
      <SearchBar />
      <Card cards={cards} />
    </div>
  );
}

export default App;
