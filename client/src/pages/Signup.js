//Imported from week 21, activity 26, client/scr/pages/signup.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
  });
  //removing data from { *data*, error }] as some have suggested causes issues with the code.  Reason unknown.

  const [addProfile, { data, error }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
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
                  placeholder="Your username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                {/* THIS SECTION WAS REMOVED AS WE ARE NOT ASKING FOR AN EMAIL:
                 <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                /> */}

                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
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
};

export default Signup;
