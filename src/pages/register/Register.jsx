import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../components/navbar/Navbar';
import './register.css';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <>
      <Navbar />
      <h1 className='loginWord'>Registration</h1>
      <div className='login'>
        <div className='lContainer'>
          <input
            type='text'
            placeholder='username'
            id='username'
            onChange={handleChange}
            className='lInput'
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            onChange={handleChange}
            className='lInput'
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            onChange={handleChange}
            className='lInput'
          />
          <input
            type='password'
            placeholder='Confirm password'
            id='password'
            onChange={handleChange}
            className='lInput'
          />

          <button disabled={loading} onClick={handleClick} className='lButton'>
            SIGNUP
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Register;
