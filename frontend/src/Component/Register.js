import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import './Login.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    phone: '',
    lineId: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log('Name:', user.name);
    console.log('Email:', user.email);
    console.log('Password:', user.password);
    console.log('Date of Birth:', `${user.day}/${user.month}/${user.year}`);
    console.log('Gender:', user.gender);
    console.log('Phone number:', user.phone);
    console.log('Line ID:', user.lineId);
    await axios.post("http://localhost:8080/register",user)
    .then(res => alert(res.data.message))

  };

  return (
    <div className='login-container'>
      <div className="login">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" width="200px" height="50px" />
        </a>
      </div>
      <h2>Create an account</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name here" onChange={handleChange} />

        <label htmlFor="email">Email address:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />

        <label htmlFor="dob-day">Date of birth:</label>
        <input type="number" id="dob-day" name="day" min="1" max="31" placeholder="DD" onChange={handleChange} />

        <label htmlFor="dob-month">&nbsp;</label>
        <input type="number" id="dob-month" name="month" min="1" max="12" placeholder="MM" onChange={handleChange} />

        <label htmlFor="dob-year"></label>
        <input
          type="number"
          id="dob-year"
          name="year"
          min="1900"
          max="2023"
          placeholder="YYYY"
          onChange={handleChange}
        />
        
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>

        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onChange={handleChange}
        />
        <label htmlFor="other">Other</label>

        <label htmlFor="phone">Phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          maxLength="10"
          pattern="\d{10}"
          title="Please enter a valid phone number (10 digits only)"
          required
          onChange={handleChange}
        />

        <label htmlFor="line-id">Line ID:</label>
        <input
          type="text"
          id="line-id"
          name="lineId"
          placeholder="Enter your Line ID"
          onChange={handleChange}
        />

        <button type="submit">Sign up</button>

        <div className="footer">
          <p>
            Do you already have an account?  <Link to="/login">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Register;
