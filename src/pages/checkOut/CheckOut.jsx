import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../components/navbar/Navbar';
import './checkOut.css';

const CheckOut = () => {
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
      <div className='check'>
        <div className='checkLogin'>
          <h1 className='checkWord'>Registration</h1>
          <h1 className='checkWord'>Thank You Choosing Us!</h1>
          <div className='checkContainer'>
            <input
              type='text'
              placeholder='Reservation ID'
              id='username'
              onChange={handleChange}
              className='checkInput'
            />

            <button onClick={handleClick} className='checkButton'>
              SEND
            </button>
            {error && <span>{error.message}</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
