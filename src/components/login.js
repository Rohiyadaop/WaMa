import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'success') {
          navigate('/');
        }
      })
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
            background-color: #121212;
            color: #ffffff;
          }

          .loginbody {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .logincontainer {
            background-color: #1e1e1e;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
          }

          .loginlogin-box h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: #ffffff;
          }

          .logininput-group {
            margin-bottom: 1.5rem;
          }

          .logininput-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
          }

          .logininput-field {
            display: flex;
            align-items: center;
            background-color: #2c2c2c;
            border-radius: 5px;
            padding: 0.5rem;
          }

          .logininput-field i {
            color: #888888;
            margin-right: 0.5rem;
          }

          .logininput-field input {
            border: none;
            outline: none;
            background: none;
            color: #ffffff;
            width: 100%;
          }

          .logininput-field input::placeholder {
            color: #888888;
          }

          .loginoptions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
          }

          .loginoptions a {
            color: #1e90ff;
            text-decoration: none;
          }

          .loginoptions a:hover {
            text-decoration: underline;
          }

          .loginbtn {
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

          .loginbtn:hover {
            background-color: #1c86ee;
          }

          .loginregister-text {
            text-align: center;
            margin-top: 1rem;
          }

          .loginregister-text a {
            color: #1e90ff;
            text-decoration: none;
          }

          .loginregister-text a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="loginbody">
        <div className="logincontainer">
          <form className="loginlogin-box" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="logininput-group">
              <label>Email</label>
              <div className="logininput-field">
                <i className="loginfas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="logininput-group">
              <label>Password</label>
              <div className="logininput-field">
                <i className="loginfas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="loginoptions">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="loginbtn">
              Login
            </button>

            <p className="loginregister-text">
              Don't have an account? <a href="/signUp">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;