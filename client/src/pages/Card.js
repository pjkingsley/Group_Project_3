import React from 'react';
// import props.data from '../components/db-Test.json';

const Card = (props) => {
    console.log(props)
  return <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={props.data.image} alt='Picture of the recipe food' />
                </div>
                <div className='card-back'>
                <h1>{props.data.name}</h1>
                <ul>
                    <li>
                    <strong> {props.data.name}</strong>
                    </li>
                    <li>
                    {props.data.name}
                    </li>
                </ul>
                </div>
            </div>
        </div>;
};

export default Card;
