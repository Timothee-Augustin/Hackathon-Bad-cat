import React, { useRef } from 'react';


function TeamForm() {
  const nameInput = useRef();
  return (
    <div className="formContainer">
      <h1>
        Create your Team
      </h1>
      <div className="TeamForm">
        <label className="labelTeam" htmlFor="owner">Owner</label>
        <input className="inputTeam" type="text" id="text" name="text" placeholder="owner" required />
        <label className="labelTeam" htmlFor="name">team name</label>
        <input className="inputTeam" ref={nameInput} type="text" id="text" name="text" placeholder="Team" required />        
      </div>
      {/* <div className="btnContainer">
        <button
          className="btnBottle"
          type="button"
          onClick={() => {
            const body = {
              name: nameInput.current.value,                
            };
            const url = `http://localhost:8000/prices?${Object.keys(body).map((key) => `${key}=${body[key]}`).join('&')}`;
            axios.get(url)
              .then((response) => {
                setEstimation(response.data.price);
                console.log(response.data.price);
              });
            }}
        >
          Create
        </button>
      </div> */}
    </div>
  )
}

export default TeamForm;
