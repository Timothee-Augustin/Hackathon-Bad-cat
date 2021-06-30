import { useLoginData } from '../contexts/LoginDataContext';
import { Redirect } from 'react-router-dom';

function Home() {
  const { loginData, setLoginData } = useLoginData();
  if (!loginData) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <h1>This is the homepage something will be created one day</h1>
      <p>Connected as {loginData[0].firstname} {loginData[0].lastname}</p>
          <button className="ButtonLogin"
          type="button"
          onClick={() => {
            setLoginData()
          }}>Logout</button>
    </>
  );
}

export default Home;
