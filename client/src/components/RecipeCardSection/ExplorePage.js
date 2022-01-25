import React, { Component } from 'react';
import CardsGrid from './CardsGrid'

export class ExplorePage extends Component {
  render() {
    return <div>
          <form id='explore-form'>
              <h1>Explore Recipes!</h1>
              <input id='explore-search-bar' type="text" name="exploreRecipes" placeholder='Search Recipes!'/>
              <input id='explore-submit' type="submit" value="Submit"/>
          </form>
        <CardsGrid/>

    </div>;
  }
}

export default ExplorePage;
