import React, { Component } from 'react';
import CardsGrid from './CardsGrid';
import { Switch, Route } from "react-router-dom";
import data from '../components/db-Test.json'
export class ExplorePage extends Component {
  render() {
    return (
      <div>
        <h1>Explore Recipes!</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CardsGrid data={data}/>
      </div>
    );
  }
}

export default ExplorePage;
