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
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
