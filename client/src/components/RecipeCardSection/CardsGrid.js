import React from 'react';
import Card from './Card'
import './css/card.css'
import data from '../db-Test.json'

const CardsGrid = () => {
  console.log(data)
  return <section id='card-grid'> 
      {data.map((eachobj, index)=>(
          <Card key={index} data={eachobj}></Card>
      ))}
  </section>;
};

export default CardsGrid;
