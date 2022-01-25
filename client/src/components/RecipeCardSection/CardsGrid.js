import React from 'react';
import Card from './Card'
import data from '../db-Test.json'
import './css/card.css'

const CardsGrid = () => {
  console.log(data)
  return <section id='card-grid'> 
      {data.map((eachobj, index)=>(
          <Card key={index} data={eachobj}></Card>
      ))}
  </section>;
};

export default CardsGrid;
