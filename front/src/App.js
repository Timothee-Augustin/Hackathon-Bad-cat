import React, { useState } from "react";
import "./App.css";
import ButtonCreateTeam from "./components/ButtonCreateTeam";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

function App() {
  return ( 
   <div className="App">
      <Chat />
      <Navbar />
    </div>
  );
}
export default App;
