import React, { useState } from 'react';
import reactDom from 'react-dom';
import SignUp from './SignUp.js';
import Login from './Login.js';
import './styles/loginSty.scss';

const SignInUp = () => {
    const [state, setState] = useState(true);
    
        return(
            <div className = 'root-container'>
              <div >
                <button className = 'selected-controller'
                    onClick = {()=> setState(true)}
                    >Login
                </button>
                <button className = 'controller-signUp'
                    onClick = {()=> setState(false)}
                    >Sign up!
                </button>
              </div>
              <div className = 'box-container'>
                  {state ? (
                      <div>
                          <Login />
                      </div>
                  ):(
                      <div>
                          <SignUp />
                      </div>
                  )}
              </div>
            </div>
        );
    };

export default SignInUp;