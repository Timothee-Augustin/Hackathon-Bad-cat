import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchBar, setSearchBar] = useState('');
  const [users, setUsers] = useState([]);

  const onChange = (event) => {
      setSearchBar(event.target.value);
  };

  useEffect(() => {    
      const url = `http://localhost:8000/users`;
      fetch(url)
        .then((res) => res.json()).then((data) => (setUsers(data)));      
  }, []);

  return (
    <>
      <input 
        type="search"
        className="search-box-input"
        placeholder="Looking for collaborators"
        results="0"
        value={searchBar}
        onChange={onChange}
      />    
      {users && users.filter((user) => (Object.values(user)
          .join().toUpperCase()
          .includes(searchBar.toUpperCase())
        )).map((user) => (
        <>
        <p>
          Firstname :
          {' '}
          {user.firstname}
        </p> 
        <p>
          Lastname :
          {' '}
          {user.lastname}
        </p>
        <p>
          Skills :
          {' '}
          {user.skills}
        </p>
      </>
      )) }
    </>
  );
}
export default SearchBar;