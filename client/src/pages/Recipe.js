//The following imports are from w21,A26/client/src/components/Recipe/index.js.  They allow the import of mutation addProfile and the use of Link from react-router-dom along with useMutation from apollo/client.  The auth allows for the authorization porcess when a profile is created.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_RECIPE } from "../utils/mutations";
import Auth from "../utils/auth";
// import { QUERY_RECIPES, QUERY_ME, } from "../utils/queries";
//The following need to be modified so that we can look for recipes  and add recipes 



const Recipe = () => {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
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
    console.log("client/src/pages, line 34")

    try {
      const { data } = await createRecipe({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
    } catch (e) {
      
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Submit Recipe</h4>
          <div className="card-body">
            {data ? (
             <Link to="/MyRecipesPage">Here are your recipes.</Link> 
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
                  placeholder="image: not yet active"
                  name="image"
                  type="text"
                  value={formState.image}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />

                <input
                  className="form-input"
                  placeholder="ingredients"
                  name="ingredients"
                  type="text"
                  value={formState.ingredients}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="instructions"
                  name="instructions"
                  type="text"
                  value={formState.instructions}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}



export default Recipe;


