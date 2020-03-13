import React, { useState } from 'react';
// import { addIdea } from '../Actions/index';
import './Form.css';

const Form = (props) => {

  const [idea, setIdea] = useState({title: '', description: ''})

  const handleChange = (e) => {
    e.persist();
    setIdea(ideas => ({...ideas,[e.target.name]: e.target.value}))
  }

  const clearInputs = () => {
    setIdea({title: '', description: ''});
  }

  const addIdeas = (e) => {
    e.preventDefault();
    let newIdea = {id: Date.now(), ...idea}
    props.addIdea(newIdea)
    clearInputs();
  }

    return (
      <section className='form-wrapper'>
        <form className='form'>
          <input 
            type='text'
            name='title'
            placeholder='Title'
            className='title'
            value={idea.title}
            onChange={handleChange}
          />
          <input 
            type='text'
            name='description'
            placeholder='Description'
            className='description'
            value={idea.description}
            onChange={handleChange}
          />
          <button className='submit-button' onClick={addIdeas}>Add Idea</button>
        </form>
      </section>
    )
}

export default Form;