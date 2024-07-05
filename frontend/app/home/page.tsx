import React from 'react';
import Sidenav from '../components/sideNav';
import "../sass/Home.scss"

const HomePage = () => {
  return (
    <div className="dashboard">
      <div className="side-bar">
        <Sidenav />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="header">
            <div className="search-bar"></div>
            <div className="notifications"></div>
            <div className="reminders"></div>
            <div className="user-profile"></div>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HomePage;
