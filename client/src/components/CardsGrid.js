import React from 'react';
import Card from './Card';
//import data from '../components/db-Test.json'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';
import './styles/card.css';

const CardsGrid = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  console.log(data);
  const recipes = data?.recipes || [];
  if (loading) {
    return <div>Loading...</div>;
  };
  console.log(recipes);
  return (
  <section id='card-grid'> 
      {recipes.map((eachobj, index)=>(
          <Card key={index} data={eachobj}></Card>
      ))}
  </section>);
};

export default CardsGrid;
