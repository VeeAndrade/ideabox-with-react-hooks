import React from 'react';
import './IdeasContainer.css';
import Ideas from '../Ideas/Ideas';

const IdeasConatiner = ({ ideas, deleteIdea }) => {
  let allIdeas = ideas.map(idea => <Ideas key={idea.id} idea={idea} deleteIdea={deleteIdea}/>)
  return (
    <section className='ideas-container'>
      {allIdeas}
    </section>
  )
}

export default IdeasConatiner;