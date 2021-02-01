import React, { useEffect, useState } from 'react';
import './Project.css';
import ProjectMedia from './ProjectMedia';
import client from './services';

function Posts() {
  const [items, setItems] = useState([]);

  console.log(items);
  useEffect(() => {
    client
      .getEntries({
        content_type: 'project'
      })
      .then((entry) => setItems(entry.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="project">
      {items.map((post, index) => (
        <ProjectMedia key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
