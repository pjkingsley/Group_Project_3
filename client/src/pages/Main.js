import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './Signup';
//import the different pages that can be switched out for the main content area
// import RendererApp from '../components/login/renderer.js';
import ExplorePage from './ExplorePage.js';
import AboutUsPage from './AboutUsPage.js'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL. if logged in explorer should be home page else login page*/}
      {/* <Route exact path='/' component={Signup}></Route> */}
      <Route exact path='/explore' component={ExplorePage}></Route>
      <Route exact path='/about' component={AboutUsPage}></Route>
    </Switch>
  );
}

export default Main;