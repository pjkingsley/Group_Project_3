//The following imports are from w21,A26/client/src/components/Recipe/index.js.  They allow the import of mutation addProfile and the use of Link from react-router-dom along with useMutation from apollo/client.  The auth allows for the authorization porcess when a profile is created.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
//The following need to be modified so that we can look for recipes  and add recipes 
import { ADD-RECIPE } from "../../utils/mutations";
import { QUERY_RECIPES, QUERY_ME, } from "../utils/queries";


const Recipe = () => {
  const [newRecipe, setNewRecipe] = useState("");

 ;

  const [addRecipe, { error }] = useMutation(ADD-RECIPE, {
    update(cache, { data: { addRecipe } }) {
      try {
        const { recipes } = cache.readQuery({ query:  QUERY_RECIPES });

        cache.writeQuery({
          query: QUERY_RECIPES,
          data: { recipes: [addRecipe, ...recipes] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });

      //This may be useful if modified
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addRecipe] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRecipe({
        variables: {
          newR,
          authored: Auth.getProfile().data.username,
        },
      });

      setNewRecipe("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div>
      <h3>Would you like to submit a recipe?</h3>

      {Auth.loggedIn() ? (
        <>
         
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="recipe"
                placeholder="Here's a new recipe..."
                value={newRecipe}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Recipe
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your recipes. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Recipe;


