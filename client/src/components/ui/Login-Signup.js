import React from 'react'
import login from '../../img/login-icon.png'

const Login_Signup = () => {
    return (
    <div id='main-content'>
        <div id='login-form'>
            <form action="/action_page.php" method="post">
                    <div class="imgcontainer">
                <img src={login} alt="Avatar" class="avatar"/></div>

                <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <button type="submit">Login</button>
                </div>
            </form>    
        </div>
        <div id='signup-form'>
            <form action="/action_page.php" method="post">
                    <div class="imgcontainer">
                <img src={login} alt="Avatar" class="avatar"/></div>

                <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <input type="password" placeholder="Confirm Password" name="psw" required/>
                <button type="submit">Sign Up!</button>
                </div>
            </form>    
        </div>
    </div>
    )
}

export default Login_Signup
