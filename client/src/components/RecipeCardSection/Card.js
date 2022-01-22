import React from 'react';
import data from '../db-Test.json'

const Card = () => {
  return <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={data.image} alt='Picture of the recipe food' />
                </div>
                <div className='card-back'>
                <h1>{data.name}</h1>
                <ul>
                    <li>
                    <strong> {data.name}</strong>
                    </li>
                    <li>
                    {data.name}
                    </li>
                </ul>
                </div>
            </div>
        </div>;
};

export default Card;
