import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTickets, fetchUsers } from '../utils/apidata';
import TicketCard from '../utils/TicketCard';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await fetchUsers();
        const tickets = await fetchTickets();
        setUser(users.find(u => u.id === id));
        setTickets(tickets.filter(ticket => ticket.userId === id));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Availability: {user.available ? 'Available' : 'Not Available'}</p>
      <h3>Tickets Assigned</h3>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
