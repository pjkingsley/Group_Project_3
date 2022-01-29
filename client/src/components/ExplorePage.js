import React, { useState, useContext } from 'react';
import CardsGrid from './CardsGrid';
import { useQuery } from '@apollo/client';
import { Context } from '../utils/Store.js';

const ExplorePage = () => {
  const [globalState, setGlobalState] = useContext(Context);
  
    return (
      <div>
        <h1>Explore Recipes!</h1>
        <form>
          {/* <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" /> */}
        </form>
        <CardsGrid />
      </div>
    );
};

export default ExplorePage;
