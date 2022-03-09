import React, { useState } from "react";
import './login.css';
import {Link} from 'react-router-dom';

function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function submitLogin(){
        console.log(email);
        console.log(password);
    }

    return(
        <div className="login">
            <form>
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__field">
                    <label>Email</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
                </div>
            
                <div className="login__field">
                    <label>Password</label>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </div>
                
                <div className="login__field">
                    <p>Forgot Password ?</p>
                </div>

                <div className="login__button">
                    <button type="button" className="primary-button" onClick={submitLogin}>
                        Login
                    </button>
                </div>

                <div className="login__field login__div">
                    <p>New User ? <strong> <Link to="/register"> Create an account </Link> </strong></p>
                </div>

            </form>
        </div>
    )
}

export default Login;
