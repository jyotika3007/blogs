import React, { useState } from "react";
import './register.css';
import { Link } from 'react-router-dom';

function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(cpassword);
    return true;
  }

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <div className="register__header">
          <h1>Register</h1>
        </div>
        <div className="register__field">
          <label>Username</label>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="register__field">
          <label>Email</label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="register__field">
          <label>Password</label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="register__field">
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" onChange={e => setCpassword(e.target.value)} />
        </div>

        <div className="register__button">
          <button type="submit" className="primary-button" >
            Register
          </button>
        </div>

        <div className="register__field login__div">
          <p>Already have an account ? <strong> <Link to="/login"> Login Here </Link> </strong></p>
        </div>

      </form>
    </div>
  )
}

export default Register;