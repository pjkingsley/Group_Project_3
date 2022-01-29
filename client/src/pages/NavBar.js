import React from 'react'
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';



const Header = () => {
    return (
      <div className="topnav">
        {/* <a className="active" href="/">Home</a> */}
        <a href="/explore">Home</a>
        <a href="/about">About</a>
        <a href="/Fun">Fun</a>
        <a href="/Recipe">Create Recipe 2</a>
        {/* <a href="/submissionForm">Create Recipe 1</a> */}
        <a href="/Login">Login</a>
        <a href="/Signup">Signup</a>
        <a href="/Profile">Profile</a>
        <a href="/MyRecipesPage">My Recipe</a>

        <div className="topnav-right"></div>
      </div>
    );
}

export default Header