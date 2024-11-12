// UserCard.js
import React from 'react';
import '../styles/global.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className="user-card__name">{user.name}</h3>
      <p className={`user-card__status ${user.available ? 'available' : 'unavailable'}`}>
        {user.available ? 'Available' : 'Not Available'}
      </p>
    </div>
  );
};

export default UserCard;
