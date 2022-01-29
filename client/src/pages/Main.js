import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import the different pages that can be switched out for the main content area
// import RendererApp from '../components/login/renderer.js';
import ExplorePage from './ExplorePage.js';
import AboutUsPage from './AboutUsPage.js';
import Signup from "./Signup.js";
import Login from "./Login.js";
import Fun from "./fun-page.js";
// import SubmissionForm from './submissionForm.js';
import Recipe from './Recipe.js';
import MyRecipesPage from './MyRecipesPage.js';
import Profile from './Profile.js';

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL. if logged in explorer should be home page else login page*/}
      {/* <Route exact path='/' component={Signup}></Route> */}
      <Route exact path="/about" component={AboutUsPage}></Route>
      <Route exact path="/Fun" component={Fun}></Route>
      <Route exact path="/explore" component={ExplorePage}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/Recipe" component={Recipe}></Route> 
      <Route exact path="/MyRecipesPage" component={MyRecipesPage}></Route>
      <Route exact path="/Profile" component=
      {Profile}></Route>
      {/* <Route exact path="/submissionForm" component={SubmissionForm}></Route> */}
    </Switch>
  );
}

export default Main;