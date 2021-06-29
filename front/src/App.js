import "./App.css";
import ButtonCreateTeam from "./components/ButtonCreateTeam";
import { LoginDataProvider } from './contexts/LoginDataContext';
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (    
    <LoginDataProvider>
      <Login />
      <Chat />
      <Navbar />
    </LoginDataProvider>
  );
}
export default App;
