// TicketCard.js
import React from 'react';
import '../styles/global.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-tag">{ticket.tag.join(', ')}</p>
      <p className="ticket-priority">Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
