
import React, { useState } from "react";
import ReactDOM from "react-dom";
import './styles/styles.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from '@apollo/client';
import { CREATE_RECIPE } from '../utils/mutations.js';
import Auth from '../utils/auth.js';


const SubmissionForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    description: '',
    ingredients: '',
    instructions: '',
  });

  const [createRecipe, { data, error }] = useMutation(CREATE_RECIPE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      const { data } = await createRecipe({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
      console.log('success');
    } catch (e) {
      console.log(e);
    }
  };

  return (
   <>
   {data ? (
     <p>{/*//put link to look at recipes */}</p>
   ) : (
    <form onSubmit={handleFormSubmit}>
      <div className="recipeForm">
        <label id='align'>Recipe Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="recipeForm">
        <label id='align'>Description:</label>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </div>
      <div className="recipeForm">
        <label id='align'>Ingredients:
          <input
            type="text"
            name="ingredients"
            value={formState.ingredients}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="recipeForm">
        <label id='align'>Instructions:
          <input
            type="text"
            name="instructions"
            value={formState.instruction}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className='btn'>
        <button 
        type="button" 
        id='btn'
        type = 'submit'
        >
          Submit
        </button>
      </div>
    </form>
   )}{error && (
    <div className="my-3 p-3 bg-danger text-white">
      {error.message}
      </div>
   )}
  </>
  );
}

export default SubmissionForm;


