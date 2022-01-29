import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
import { Context } from '../utils/Store.js';

const SignUp = () => {
    const [formState, setFormState] = useState({
        userName: '',
        password: '',
    });
    const [globalState, setGlobalState] = useContext(Context);

    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
    console.log(data);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.addProfile.token);
            setGlobalState({
                isLoggedIn: true,
                _id: data._id
            });
            console.log(globalState);
        } catch (e) {
            console.error(e);
        };

        setFormState({
            userName: '',
            password: '',
        });
    };

    return (
        <div className = 'inner-container'>
            {data ? (
                <p>
                    Success! You may now use our{" "}
                    <Link to = '/explore'>Explorer Page.</Link>
                </p>
            ) : (
    <div>            
        <div className = 'header'>
            Register
            </div>
        <form className = 'box'>
            <div className = 'input-group'>
                <label htmlFor = 'userName'>Username</label>
                <input 
                    type = 'text'
                    name = 'userName'
                    className = 'login-input'
                    onChange = {handleChange}
                    placeholder = 'Username'/>
            </div>
            <div className = 'input-group'>
                <label htmlFor = 'password'>Password</label>
                <input 
                    type = 'password'
                    name = 'password'
                    className = 'login-input'
                    onChange = {handleChange}
                    placeholder = 'Password' />
            </div>
            <div className="input-group">
                <label htmlFor="email">Confirm Password</label>
                <input 
                    type="confirmPassword" 
                    name="confirmPassword"  
                    className="login-input" 
                    onChange = {handleChange}
                    placeholder='Confirm Password'/>
            </div>
            <button type="button" className="login-btn" onClick={handleFormSubmit}>Register</button>
        </form>
         {error && (
            <div className = 'my-3 p3 bg-danger text-white'>
                {error.message}
                {console.log('line91 of SignUp.js')}
            </div>
        )}
    </div>
    )}
</div>)}

export default SignUp;