import { useLoginData } from '../contexts/LoginDataContext';
import { Redirect } from 'react-router-dom';
import Chat from '../components/Chat'

function ChatPage() {
  const { loginData } = useLoginData();

  if (!loginData) {
    return <Redirect to="/login" />;
  }

  return (
      <Chat />
  );
}

export default ChatPage;
