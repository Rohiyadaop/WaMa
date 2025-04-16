import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function SighUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/signUP', { name, email, password }) // this is the backend server
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #121212; /* Dark background */
            color: #ffffff;
          }

          .signUpbody {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .signUpcontainer {
            background-color: #1e1e1e; /* Slightly lighter dark background */
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
          }

          .signUpsignUp-box h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: #ffffff;
          }

          .signUpinput-group {
            margin-bottom: 1.5rem;
          }

          .signUpinput-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
          }

          .signUpinput-field {
            display: flex;
            align-items: center;
            background-color: #2c2c2c;
            border-radius: 5px;
            padding: 0.5rem;
          }

          .signUpinput-field i {
            color: #888888;
            margin-right: 0.5rem;
          }

          .signUpinput-field input {
            border: none;
            outline: none;
            background: none;
            color: #ffffff;
            width: 100%;
          }

          .signUpinput-field input::placeholder {
            color: #888888;
          }

          .signUpoptions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
          }

          .signUpoptions a {
            color: #1e90ff;
            text-decoration: none;
          }

          .signUpoptions a:hover {
            text-decoration: underline;
          }

          .signUpbtn {
            width: 100%;
            padding: 0.75rem;
            background-color: #1e90ff;
            border: none;
            border-radius: 5px;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .signUpbtn:hover {
            background-color: #1c86ee;
          }

          .signUpregister-text {
            text-align: center;
            margin-top: 1rem;
          }

          .signUpregister-text a {
            color: #1e90ff;
            text-decoration: none;
          }

          .signUpregister-text a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="signUpbody">
        <div className="signUpcontainer">
          <form className="signUpsignUp-box" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <div className="signUpinput-group">
              <label>Name</label>
              <div className="signUpinput-field">
                <i className="signUpfas fa-user"></i>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="signUpinput-group">
              <label>Email</label>
              <div className="signUpinput-field">
                <i className="signUpfas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="signUpinput-group">
              <label>Password</label>
              <div className="signUpinput-field">
                <i className="signUpfas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="signUpoptions">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="signUpbtn">
              Sign Up
            </button>

            <p className="signUpregister-text">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SighUp;