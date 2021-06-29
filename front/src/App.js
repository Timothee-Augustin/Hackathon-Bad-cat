import "./App.css";
import ButtonCreateTeam from "./components/ButtonCreateTeam";
import { LoginDataProvider } from './contexts/LoginDataContext';
import Chat from "./components/Chat";
import Login from "./pages/Login"


function App() {
  return (
    
    <LoginDataProvider>
      <Login />
      <Chat />
    </LoginDataProvider>      
     
    
  );
}
export default App;
