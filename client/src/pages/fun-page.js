import React from 'react';
import '../App.css';
import './css/funpage.css'
import axios from 'axios';

const FunPage = () => {

        const getPun  = async()=>{
            var pun = await axios.get("https://my-bao-server.herokuapp.com/api/breadpuns");
            var randomFact = document.getElementById('pun')
            randomFact.innerHTML = pun.data;
            console.log(pun.data);
            
        }
            return (<div className="FunPage">
            <button id= "Pun-Button" onClick={_ => getPun()}>Press me for a surprise!</button>
            <p id='pun'></p>
            <p id='secret'>Everyone needs a good bread pun or two in their life.</p>
        </div>
      );
    };

export default FunPage;
