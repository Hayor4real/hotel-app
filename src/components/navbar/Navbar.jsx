import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className='logo'>Booking.com</span>
        </Link>
        <div className='navItems'>
          <span className='currency'>Eur</span>
          <span className='currencyText'>choose your currency</span>
          <button className='queButton'>?</button>
          <input
            className='inputButton'
            type='text'
            placeholder='book the accommodation'
          />
          <button className='navButton'>
            <Link
              to='/register'
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Register
            </Link>
          </button>
          <button className='navButton'>
            <Link
              to='/checkOut'
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              CheckOut
            </Link>
          </button>

          <button className='navButton'>
            <Link
              to='/login'
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Annouce
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
