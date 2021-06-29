import React, { useRef } from 'react';
import { useLoginData } from '../contexts/LoginDataContext';

function TeamForm( { teams, setTeams }) {
  const { loginData } = useLoginData();
  const nameInput = useRef();
    
  return (
    <div className="formContainer">
      <h1>
        Create your Team
      </h1>
      {loginData &&(
        <>
      <div className="TeamForm">
        <label className="labelTeam" htmlFor="owner">Owner</label>
        <label className="inputTeam" type="text" id="text" name="text"  required>{' '}{loginData[0].firstname}</label>
        <label className="labelTeam" htmlFor="name">team name</label>
        <input className="inputTeam" ref={nameInput} type="text" id="text" name="text" placeholder="Team" required />        
      </div>
      <div className="btnContainer">
        <button
          className="btnTeam"
          type="button"
          onClick={() => {
            const team = {
              owner_id:loginData[0].id,
              name: nameInput.current.value,                
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
      )}
    </div>
  )
}

export default TeamForm;
