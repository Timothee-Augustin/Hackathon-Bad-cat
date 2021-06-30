import React, { useRef } from 'react';
import { useLoginData } from '../contexts/LoginDataContext';
import "./TeamForm.css";

function TeamForm({ teams, setTeams, members, setMembers }) {
  const { loginData } = useLoginData();
  const nameInput = useRef();
    
  return (
    <div className="formContainer">
      <h1>
        Create your Team !
      </h1>
        <>
      <div className="TeamForm">
      <div className="owner-div">
        <label className="labelTeam" htmlFor="owner">Owner :</label>
        <label className="inputTeam" type="text" id="text" name="text" required>{' '}{loginData[0].firstname}</label>
      </div>
        <label className="labelTeam" htmlFor="name">Team name :</label>
        <input className="inputTeam" ref={nameInput} type="text" id="text" name="text" required />        
      </div>
      <div className="btnContainer">
        <button
          className="btnTeam"
          type="button"
          onClick={() => {
            const team = {
              owner_id:loginData[0].id,
              teamname: nameInput.current.value,                
            };
            const config = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(team),
            };
            fetch('http://localhost:8000/teams', config).then((res) => res.json()).then((data) => {
              setTeams((previousTeams) => ([...previousTeams, data]))    
          }); 
               
            }}
        >
          Create
        </button>
      </div>
      </>
    </div>
  )
}

export default TeamForm;
