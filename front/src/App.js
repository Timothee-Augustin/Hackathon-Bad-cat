import ButtonCreateTeam from "./components/ButtonCreateTeam";
import { LoginDataProvider } from './contexts/LoginDataContext';
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Logo from './images/fiverr-community-logo-200.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={Logo} className="fiverr-community-logo-200" alt="fiverr-community-logo-200" />
      </div>
      <div className="main">
        main
      </div>
      <div className="navBar">
        navBar
      </div>
      <LoginDataProvider>
        <Login />
        <Navbar />
      </LoginDataProvider>
    </div>
  )
}

export default App;
