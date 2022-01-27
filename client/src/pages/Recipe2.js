//The following imports are from w21,A26/client/src/components/Recipe/index.js.  They allow the import of mutation addProfile and the use of Link from react-router-dom along with useMutation from apollo/client.  The auth allows for the authorization porcess when a profile is created.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
//The following need to be modified so that we can look for recipes  and add recipes 
// import { ADD-RECIPE } from "../utils/mutations";
import {CREATE_RECIPE } from "../utils/mutations";
// import { QUERY_RECIPES, QUERY_ME, } from "../utils/queries";


const Recipe = () => {
  const [formState, setFormState] = useState({
   name:"",
   image:"",
   description:"",
   author:"",
   ingredients:"",
   instructions:"",
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
    console.log("client/src/pages, line 36")

    try {
      const { data } = await createRecipe({
        variables: { ...formState },
      }),
    } catch (e) {
      console.error("error on line 34-42 of pages/Recipes:", e);
    }
  };

  //     setNewRecipe("");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  // };

  // return (
  //   <div>
      <h3>Would you like to submit a recipe?</h3>
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Submit Recipe</h4>
          <div className="card-body">
            {data ? (
              <p>
                {/* //THIS PATH NEEDS TO BE CHECKED: <Link to="/">back to the homepage.</Link> */}
                {/* Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link> */}
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
               <input
                  className="form-input"
                  placeholder="recipe name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                /> 
                 <input
                  className="form-input"
                  placeholder="image"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                /> 
                 <input
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />  
                 <input
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />  
                 <input
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />  
                  <input
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                </form>
            )
        <p>
          You need to be logged in to share your recipes. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Recipe;


