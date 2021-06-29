import { LoginDataProvider } from './contexts/LoginDataContext';
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import Login from "./pages/Login";
import Profile from './pages/Profile'
import Logo from './images/fiverr-community-logo-200.png';
import './App.css';

function App() {
  return (
    <LoginDataProvider>
    <div className="App">
      <div className="header">
        <img src={Logo} className="fiverr-community-logo-200" alt="fiverr-community-logo-200" />
      </div>
      <BrowserRouter>
      <div className="main">
        <Routes />
      </div>      
      <div className="footer">
        <Navbar />
      </div>
      </BrowserRouter>
    </div>
    </LoginDataProvider>
  )
}

export default App;
