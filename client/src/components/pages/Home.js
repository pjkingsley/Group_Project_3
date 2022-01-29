import React from 'react';
import Auth from '../../utils/auth.js';
import SignInUp from '../SignInUp.js';
import Create from '../SubmissionForm.js';
import ExplorePage from '../ExplorePage.js';
import { Switch, Route } from 'react-router-dom';
import AboutUsPage from './AboutUsPage.js';
import Fun from '../Fun.js';


export default function Home () {
   
    return (
      <Switch>
          {" "}
          <Route exact path = '/about' component = {AboutUsPage}></Route>
          <Route exact path = '/fun' component = {Fun}></Route>
          <Route exact path = '/explore' component = {ExplorePage}></Route>
          <Route exact path = '/create' component = {Create}></Route>
          <Route exact path = '/' component = {SignInUp}></Route>
      </Switch>
    )};