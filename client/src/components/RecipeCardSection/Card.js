import React from 'react';

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
                    <strong> {props.data.description}</strong>
                    </li>
                    <li>
                    Submitted by: {props.data.author}
                    </li>
                </ul>
                </div>
            </div>
        </div>;
};

export default Card;
