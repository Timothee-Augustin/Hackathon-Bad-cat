import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TeamForm from "../components/TeamForm";
import TeamMembers from '../components/TeamMembers';
import { useLoginData } from '../contexts/LoginDataContext';

function Profile() {
  const { loginData } = useLoginData();
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    if (loginData != null) {
      const url = `http://localhost:8000/teams`;
      fetch(url)
        .then((res) => res.json()).then((data) => (setTeams(data)));
  }
  }, [loginData]);

  if (!loginData) {
    return <Redirect to="/login" />;
  }

  return (
      <>
        <TeamForm teams={teams} setTeams={setTeams}  />
        { teams && teams.map((team) => (
          <>
            <p>
              Team :
              {' '}
              {team.teamname}
            </p> 
            <TeamMembers id={team.id} members={members} setMembers={setMembers} />
          </>
      ))}
      </>
  );
}

export default Profile;
