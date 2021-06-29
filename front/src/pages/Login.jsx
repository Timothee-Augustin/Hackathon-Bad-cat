import React, { useRef } from 'react';
// import { Redirect, NavLink } from 'react-router-dom';


import { useLoginData } from '../contexts/LoginDataContext';

// const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Login() {
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const {
    loginData, 
    setLoginData,
  } = useLoginData();

//   if (loginData != null) {
//     return <Redirect to="/profile" />;
//   }

  return (
    <div className="box2">
      {/* {link('/', 'Accueil')} */}
      {!loginData &&(
      <div className="child2">        
        <label className="labelLogin" htmlFor="firstname">Firstname</label>
        <input className="inputFirstname" ref={firstnameInput} type="text" id="firstname" name="firstname" />
        <label className="labelLastname" htmlFor="lastname">Lastname</label>
        <input className="inputLastname" ref={lastnameInput} type="lastname" id="lastname" name="lastname" />
        <button
          className="ButtonLogin"
          type="button"
          onClick={() => {
            const user = {
                firstname: firstnameInput.current.value,
                lastname: lastnameInput.current.value,
              };
              const config = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
              };
              fetch('http://localhost:8000/login', config).then((res) => res.json()).then((data) => {
                setLoginData(data);
            });
          }}
        >
          Login
        </button>
      </div>
      )}
      {loginData && (
        <>
          <p>Connected as {loginData[0].firstname} {loginData[0].lastname}</p>
          <button className="ButtonLogin"
          type="button"
          onClick={() => {
            setLoginData()
          }}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Login;
