import React from 'react';
import Card from './Card'
import './css/card.css'
import data from '../db-Test.json'

const CardsGrid = ({data}) => {
  return <section> 
      {data.map((data)=>(
          <Card key={data._id} data={data}></Card>
      ))}
  </section>;
};

export default CardsGrid;
