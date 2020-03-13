import React from 'react';
import './Ideas.css';

const Ideas = ({ idea, deleteIdea }) => {
  return (
    <section key={idea.id} className='idea-box'>
      <h2 className='idea-title'>{idea.title}</h2>
      <p className='idea-description'>{idea.description}</p>
      <button className='delete-button' id={idea.id} onClick={(event) => deleteIdea(event)}>Delete</button>
    </section>
  )
}

export default Ideas;