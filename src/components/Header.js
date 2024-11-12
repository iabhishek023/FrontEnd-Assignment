import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(`/${value}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
      <select className="header-dropdown" onChange={handleSelect} defaultValue="">
          <option value="" disabled>Choose Section</option>
          <option value="tickets">Tickets</option>
          <option value="users">Users</option>
        </select>
        <Link to="/" style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}>
          Ticketing System
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
