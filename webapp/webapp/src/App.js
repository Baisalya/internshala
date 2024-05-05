// App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Sell from './components/pages/Sales';
import Top5 from './components/pages/Top5';
import TodaysRevenue from './components/pages/TodaysRevenue';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing localStorage, removing tokens, etc.
    console.log("Logout clicked");
  };
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Use bg-primary for blue color */}
          <div className="container">
            <NavLink className="navbar-brand" to="/">Sales App</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/sell">Add Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/top5">Top 5 Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/todays-revenue">Today's Total Revenue</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                </li>
                 {/* Add Logout option */}
                 <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/sell" element={<Sell />} />
          <Route path="/top5" element={<Top5 />} />
          <Route path="/todays-revenue" element={<TodaysRevenue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
