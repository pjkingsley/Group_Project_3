import React, { Component } from 'react';
import CardsGrid from './CardsGrid'

export class ExplorePage extends Component {
  render() {
    return <div>
        <h1>Explore Recipes!</h1>
        <input type='text'> </input>
        <CardsGrid/>

    </div>;
  }
}

export default ExplorePage;
