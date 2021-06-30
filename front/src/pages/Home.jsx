import { useLoginData } from '../contexts/LoginDataContext';
import { Redirect } from 'react-router-dom';

function Home() {
  const { loginData, setLoginData } = useLoginData();
  if (!loginData) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <h1>Connected as {loginData[0].firstname} {loginData[0].lastname} !</h1>
          <button className="ButtonLogin"
          type="button"
          onClick={() => {
            setLoginData()
          }}><span>Logout</span></button>
    </>
  );
}

export default Home;
