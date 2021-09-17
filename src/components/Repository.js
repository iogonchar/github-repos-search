import React from "react";

const Repository = (props) => {
  console.log('rep state', props)
  return (
    <div>
      <p></p>
      <p>{ props.location.state.node.nameWithOwner }</p>
      <p>{ props.location.state.node.description }</p>
      <p>{ props.location.state.node.primaryLanguage.name }</p>
      <p>Stars: { props.location.state.node.stargazerCount }</p>
      <p>Issues: { props.location.state.node.issues.totalCount }</p>
      <p>Pull Requests: { props.location.state.node.pullRequests.totalCount }</p>

        {
          props.location.state.node.languages.nodes.map((item) => <p key={item.color}>{item.name} {item.color}</p>)
        }

    </div>
  );
}

export default Repository;
