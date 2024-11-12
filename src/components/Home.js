import React, { useEffect, useState } from 'react';
import { fetchTickets, fetchUsers } from '../utils/apidata';
import TicketCard from '../utils/TicketCard';

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const ticketsData = await fetchTickets();
        const usersData = await fetchUsers();
        setTickets(ticketsData);
        setUsers(usersData);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Tickets</h1>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} users={users} />
        ))}
      </div>
    </div>
  );
};

export default Home;
