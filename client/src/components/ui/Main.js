import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import the different pages that can be switched out for the main content area
import RendererApp from '../login/renderer.js';
import ExplorePage from '../RecipeCardSection/ExplorePage.js';
import AboutUsPage from '../ui/AboutUsPage.js'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={RendererApp}></Route>
      <Route exact path='/explore' component={ExplorePage}></Route>
      <Route exact path='/about' component={AboutUsPage}></Route>
    </Switch>
  );
}

export default Main;