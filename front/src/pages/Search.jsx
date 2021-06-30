import SearchBar from "../SearchBar";
import { useLoginData } from '../contexts/LoginDataContext';
import { Redirect } from 'react-router-dom';

function Search () {
  const { loginData } = useLoginData();

  if (!loginData) {
    return <Redirect to="/login" />;
  }
  return (
      <SearchBar />    
  );
}

export default Search;
