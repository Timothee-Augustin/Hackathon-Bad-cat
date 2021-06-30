import React, { useEffect, useState } from 'react';

function TeamMembers ({ id }) {
  const [members, setMembers] = useState([]);
    useEffect(() => {    
          const url = `http://localhost:8000/teams/${id}`;
          fetch(url)
            .then((res) => res.json()).then((data) => {
              setMembers(data)
            })
            ;   
           
      }, [id, setMembers]);
      
    return (
      <>
        {members && members.map((member) => (
          <>
            <p>
              Role :
              {' '}
              {member.name}
            </p>
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
          </>
        ))}
      </>
    );
}

export default TeamMembers;
