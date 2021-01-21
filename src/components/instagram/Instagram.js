import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Instagram() {
  const { allInstaNode } = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            username
            comments
            caption
            likes
            preview
          }
        }
      }
    }
  `);

  const { edges } = allInstaNode;

  return (
    <div>
      {edges.map((edge) => {
        return (
          <>
            <img src={edge.node.preview}></img>
            <h2>{edge.node.likes}</h2>
          </>
        );
      })}
    </div>
  );
}

export default Instagram;
