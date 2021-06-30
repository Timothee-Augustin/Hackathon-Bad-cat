import React, { useEffect } from 'react';

function TeamMembers ({ id, members, setMembers}) {
  
    useEffect(() => {    
          const url = `http://localhost:8000/teams/${id}`;
          fetch(url)
            .then((res) => res.json()).then((data) => (setMembers(data)));      
      }, []);
      
    return (
      <>
        {members && members.map((member) => (
          <>
            <p>
              Firstname :
              {' '}
              {member.firstname}
            </p> 
            <p>
              Lastname :
              {' '}
              {member.lastname}
            </p>
            <p>
              Role :
              {' '}
              {member.name}
            </p>
          </>
        ))}
      </>
    );
}

export default TeamMembers;
