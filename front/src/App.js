import { LoginDataProvider } from './contexts/LoginDataContext';
import { NavLink } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';

import Logo from './images/fiverr-community-logo-200.png';
import './App.css';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <NavLink to='/' exact activeClassName="active" className="link"><img src={Logo} className="fiverr-community-logo-200" alt="fiverr-community-logo-200" /></NavLink>
          </div>
          <div className="main">
            <Routes />
          </div>      
          <div className="footer">
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    </LoginDataProvider>
  )
}

export default App;
