import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTickets, fetchUsers } from '../utils/apidata';

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTicket = async () => {
      try {
        const tickets = await fetchTickets();
        const usersData = await fetchUsers();
        setTicket(tickets.find(ticket => ticket.id === id));
        setUsers(usersData);
      } finally {
        setLoading(false);
      }
    };

    loadTicket();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!ticket) return <div>Ticket not found</div>;

  const assignedUser = users.find(user => user.id === ticket.userId);

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Tags: {ticket.tag.join(", ")}</p>
      {assignedUser && (
        <div>
          <h3>Assigned User: {assignedUser.name}</h3>
          <p>Availability: {assignedUser.available ? 'Available' : 'Not Available'}</p>
        </div>
      )}
    </div>
  );
};

export default TicketDetail;
