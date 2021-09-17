import React from "react";

const Repository = (props) => {
  console.log('rep state', props)
  return (
    <div>
      <p>{ props.location.state.node.id }</p>
      <p>{ props.location.state.node.nameWithOwner }</p>
      <p>{ props.location.state.node.description }</p>
      <p>{ props.location.state.node.primaryLanguage.name }</p>
      <p>{ props.location.state.node.stargazerCount }</p>
    </div>
  );
}

export default Repository;
