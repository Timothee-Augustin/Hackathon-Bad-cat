import React, { useState } from 'react';
import TeamForm from "../components/TeamForm";
import { useLoginData } from '../contexts/LoginDataContext';

function Profile() {
  const { loginData } = useLoginData();
  const [teams, setTeams] = useState([]);
  React.useEffect(() => {
    if (loginData != null) {
      const url = `http://localhost:8000/teams`;
      fetch(url)
        .then((res) => res.json()).then((data) => (setTeams(data)));
        
    }
  }, [loginData]);
  return (
      <>
        <TeamForm teams={teams} setTeams={setTeams} />
        { teams && teams.map((team) => (
          <p>
            Team :
            {' '}
            {team.name}
          </p>        
      ))}
      </>
  );
}

export default Profile;
