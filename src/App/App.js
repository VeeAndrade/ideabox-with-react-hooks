import React, { useReducer } from 'react';
import Form from '../Form/Form';
import { ideasReducer }from '../Reducers/ideas';
import IdeasContainer from '../IdeasContainer/IdeasContainer';
import './App.css';

const App = () => {
  const [ideas, dispatch] = useReducer(ideasReducer, [])

  const handleAdd = (idea) => {
    dispatch({
      type: 'ADD_IDEA',
      idea
    })
  }

  const handleDelete = (e) => {
    dispatch({
      type: 'DELETE_IDEA',
      id: e.target.id
    })
  }

  return (
    <div className='main-app'>
      <h1 className='main-heading'>Idea Box</h1>
      <Form addIdea={handleAdd}/>
      <IdeasContainer ideas={ideas} deleteIdea={handleDelete}/> 
    </div>
  );
}

export default App;