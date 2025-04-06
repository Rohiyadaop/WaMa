import { useState } from 'react';
import '../style/login.css';
import axios from 'axios';

function login(){
    
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('',{email,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
    }
    return(
    <>
    <div class = "loginbody">
     <div class="logincontainer">
    <form class="loginlogin-box" onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div class="logininput-group">
        <label>Email</label>
        <div class="logininput-field">
          <i class="loginfas fa-envelope"></i>
          <input type="email" placeholder="Enter your email" required
          onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
      </div>

      <div class="logininput-group">
        <label>Password</label>
        <div class="logininput-field">
          <i class="loginfas fa-lock"></i>
          <input type="password" placeholder="Enter your password" required
             onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
      </div>

      <div class="loginoptions">
        <label><input type="checkbox"/> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>

      <button type="submit" class="loginbtn">Login</button>

      <p class="loginregister-text">Don't have an account? <a href="/signUp">Register</a></p>
    </form>
  </div>
  </div>  
    </>)
}
export default login;