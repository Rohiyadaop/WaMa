import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSocket } from '../provider/socket'; // Importing the socket from the provider

const CallingPage = () => {
const {socket} = useSocket(); //importing the socket from the provider

const  handleNewUserJoined = (data)=>{
    const {emailid} = data;
    console.log("new user joined", emailid);
}

//  formtion of the hook 
useEffect(()=>{
    socket.on('user-joined', handleNewUserJoined); //listening to the event when the user joins the room
},[socket])

  const [participants, setParticipants] = useState([
    { id: 1, name: 'Main User', isMain: true },
    { id: 2, name: 'User 2', isMain: false },
    { id: 3, name: 'User 3', isMain: false },
    { id: 4, name: 'User 4', isMain: false },
    { id: 5, name: 'User 5', isMain: false },
  ]);
  const [newParticipantName, setNewParticipantName] = useState('');

  const handleSwitchMain = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === id
          ? { ...participant, isMain: true }
          : { ...participant, isMain: false }
      )
    );
  };

  const handleAddParticipant = () => {
    if (newParticipantName.trim()) {
      const newParticipant = {
        id: participants.length + 1,
        name: newParticipantName,
        isMain: false,
      };
      setParticipants([...participants, newParticipant]);
      setNewParticipantName('');
    }
  };






  return (
    <>
      <style>
        {`
          .calling-page {
            display: flex;
            flex-direction: column;
            height: 100vh;
            background-color: #121212;
            color: #ffffff;
            padding: 10px;
          }

          .main-participant {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1e1e1e;
            margin-bottom: 10px;
            border-radius: 10px;
            padding: 20px;
          }

          .main-video {
            text-align: center;
          }

          .video-placeholder {
            width: 100%;
            height: 300px;
            background-color: #2c2c2c;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #888888;
          }

          .other-participants {
            flex: 1;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 10px;
          }

          .small-video {
            flex: 0 0 150px;
            text-align: center;
            background-color: #1e1e1e;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .small-video:hover {
            transform: scale(1.05);
          }

          .small-video .video-placeholder {
            width: 100%;
            height: 100px;
          }

          .add-participant-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
          }

          .add-participant-bar input {
            flex: 1;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          .add-participant-bar button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .add-participant-bar button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="calling-page">
        {/* Add Participant Bar */}
        <div className="add-participant-bar">
          <input
            type="text"
            placeholder="Enter participant name"
            value={newParticipantName}
            onChange={(e) => setNewParticipantName(e.target.value)}
          />
          <button onClick={handleAddParticipant}>Add Participant</button>
        </div>

        {/* Main Participant */}
        <div className="main-participant">
          {participants
            .filter((participant) => participant.isMain)
            .map((participant) => (
              <div key={participant.id} className="main-video">
                <h2>{participant.name}</h2>
                <div className="video-placeholder">Main Video</div>
              </div>
            ))}
        </div>

        {/* Other Participants */}
        <div className="other-participants">
          {participants
            .filter((participant) => !participant.isMain)
            .map((participant) => (
              <div
                key={participant.id}
                className="small-video"
                onClick={() => handleSwitchMain(participant.id)}
              >
                <h3>{participant.name}</h3>
                <div className="video-placeholder">Small Video</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CallingPage;