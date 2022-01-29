import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth.js';
import { Context } from '../utils/Store.js';


const Login = () => {
    const [formState, setFormState] = useState({ 
        userName: '',
        password: ''
    });

    const [globalState, setGlobalState] = useContext(Context);
    console.log(globalState);

    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } =await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
            console.log(Auth);
            setGlobalState({
                isLoggedIn: true,
                _id: Auth._id
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
                Success!  You may now use our{" "}
                <Link to = '/explore'> Explorer Page. </Link>
            </p>
        ) : (
        <div>    
           <div className = 'header'>
                Login
            </div>
         <form className = 'box'>
            <div className = 'input-group'>
                <label htmlFor = 'userName'>Username</label>
                <input 
                    type = 'text' 
                    name = 'userName' 
                    onChange = {handleChange}
                    className = 'login-input'
                    placeholder = 'Username'/>
            </div>
            <div className = 'input-group'>
                <label htmlFor = 'password'>Password</label>
                <input 
                    type = 'password'
                    name = 'password'
                    onChange = {handleChange}
                    className = 'login-input'
                    placeholder = 'Password' />
            </div>
            <button
                type = 'button'
                className = 'login-btn'
                onClick = {handleFormSubmit}>Login</button>
         </form>
         {error && (
                <div className = 'my-3 p3 bg-danger text-white'>
                    {error.message}
                    {console.log('line78 of Login.js')}
                </div>
            )}
        </div>
    )}
    </div>)}

export default Login