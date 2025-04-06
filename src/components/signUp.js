import React from 'react';
import { useState } from 'react';
import '../style/signUp.css';
import axios from 'axios';

function sighUp(){
    const [name ,setName] = useState("");
    const [email ,setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/signUP',{name,email,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
    }

    return(<>
    <div class = "sighUpbody">
     <div class="sighUpcontainer">
    <form class="sighUpsighUp-box" onSubmit={handleSubmit}>
      <h2>sighUp</h2>
      
      <div class="sighUpinput-group">
        <label>Name</label>
        <div class="sighUpinput-field">
          <i class="sighUpfas fa-envelope"></i>
          <input type="name" placeholder="Enter your name" required
          onChange={(e)=> setName(e.target.value)}
          />
        </div>
      </div>
      <div class="sighUpinput-group">
        <label>Email</label>
        <div class="sighUpinput-field">
          <i class="sighUpfas fa-envelope"></i>
          <input type="email" placeholder="Enter your email" required
          onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
      </div>

      <div class="sighUpinput-group">
        <label>Password</label>
        <div class="sighUpinput-field">
          <i class="sighUpfas fa-lock"></i>
          <input type="password" placeholder="Enter your password" required
             onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
      </div>

      <div class="sighUpoptions">
        <label><input type="checkbox"/> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>

      <button type="submit" class="sighUpbtn">sighUp</button>

      <p class="sighUpregister-text">Don't have an account? <a href="#">Register</a></p>
    </form>
  </div>
  </div>  
    </>)
}
export default sighUp;