import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './NavigationBar.css';
import Statistic from "../../home/Statistics/Statistics"
import ReadingsPage from "../../home/ReadingsPage/ReadingsPage";
import Dashboard from "../../home/Dashboard/Dashboard";
import Home from "../../home/Home";



function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <BrowserRouter>
      <div>
        <button className={`Nav-Button ${showMenu ? 'rotate' : ''}`} onClick={toggleMenu}>
          <div className={`div-menu-icon-1 ${showMenu ? 'rotate' : ''}`}></div>
          <div className={`div-menu-icon-2 ${showMenu ? 'remove' : ''}`}></div>
          <div className={`div-menu-icon-3 ${showMenu ? 'rotate' : ''}`}></div>
        </button>

        <div className={`nav-container ${showMenu ? 'show' : ''}`}>
          {showMenu && (
            <nav>
              <ul>
                <li><Link to="/"><p>Home</p></Link></li>
                <li><Link to="/Dashboard"><p>Dashboard</p></Link></li>
                <li><Link to="/ReadingsPage"><p>ReadingsPage</p></Link></li>
                <li><Link to="/Statistics"><p>Statistics</p></Link></li>
              </ul>
            </nav>
          )}
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/ReadingsPage" element={<ReadingsPage />} />
            <Route path="/Statistics" element={<Statistic />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavigationBar;