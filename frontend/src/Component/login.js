import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { UserContext } from '../ContextApi';

const Login = () => {
  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      console.log(response.data);
      setUserData(response.data);
      alert("Login Successful");
      // Redirect to the home page after successful login
      window.location.href = '/home';
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid email or password");
      } else if (error.response && error.response.status === 404) {
        alert("This email is not registered");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className='login-container'>
      <div className="login">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width="200px" height="50px" />
          </Link>
        </div>
        <h2>Login to CoinCol</h2>
        <form id="myForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address:</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <button type="submit">Sign in</button>

          <div className="footer">
            <p>
              New member? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
