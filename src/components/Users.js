import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../utils/apidata';
import UserCard from '../utils/UserCard'
import '../styles/global.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

