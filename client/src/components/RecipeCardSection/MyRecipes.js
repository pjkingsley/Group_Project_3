import React, { Component } from 'react';
import CardsGrid from './CardsGrid'

export class ExplorePage extends Component {
  render() {
    return <div>
          <form id='explore-form'>
              <h1>My Recipes</h1>
          </form>
        <CardsGrid/>

    </div>;
  }
}

export default ExplorePage;
