import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import TicketDetail from './components/TicketDetail';
//import TicketDetail from '../components/TicketDetail';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Home />} /> {/* Ticket List page */}
        <Route path="/users" element={<Users />} />   {/* User List page */}
        <Route path="/ticket/:id" element={<TicketDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;


