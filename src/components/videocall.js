import React from 'react'
import '../style/videocall.css';
import writingIcon from '../assets/writing.jpeg';
import { useState,useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; //importing the useNavigate hook from react-router-dom
import {useSocket} from '../provider/socket';

const Videocall = () => {

  const {socket} = useSocket(); //importing the socket from the provider
  const navigate = useNavigate(); //using the useNavigate hook to navigate to the room page
//varrible  to store the email and

const [email, setEmail] = useState('');
const [roomid , setRoomid] = useState('');

const handleRoomjoined  = ({roomid})=>{
  console.log("joined room", roomid);
}

const handleJoinRoom = () => {
 navigate(`/room/${roomid}`); //navigating to the room page
}
useEffect(() => {
  socket.on("joined-room", handleRoomjoined); //listening to the event when the user joins the room
},[socket])



  return (
   <>
   <header>
    <div className="logo">LOGO</div>
    <nav>
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="buyer">Buyer</a></li>
        <li><a href="contect">Contact Us</a></li>

      </ul>
    </nav>
  </header>
  <main>
    <section className="text-section">
      <h1>LIVE TRAINING CLASS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder=" Enter your Email "></input>
      <input value={roomid} onChange={e=>setRoomid(e.target.value)} placeholder="Enter your code "></input>
      <a  className="sign-in-btn" onClick={handleJoinRoom}>Join class</a>
    </section>

    <section className="image-section">
      <div className="phone">
        <div className="video-call">
          <img src={writingIcon} alt="Caller" className="caller-pic" />
          <img src={writingIcon}alt="You" className="you-pic" />
          <div className="call-info">
            <p>00:53</p>
            <button className="end-call">📞</button>
          </div>
        </div>
      </div>
    </section> 
  </main>
   </>
  )
}

export default Videocall;