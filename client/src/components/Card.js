import React, { useContext } from 'react';
import { Context } from '../utils/Store';


const Card = (props) => {
    console.log(props);
    const [globalState, setGlobalState] = useContext(Context);
    const handlePageChange = async (event) => {
        event.preventDefault();
        console.log(event.target.id);
        setGlobalState(event.target.id)
    };
    return <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={props.data.image} alt='Picture of the recipe food' />
                </div>
                <div className='card-back'
                id = {props.data._id}
                onClick = {handlePageChange}
                href = '/CardsGrid'
                >
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
