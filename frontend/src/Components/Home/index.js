import React from 'react';
import { Link } from "react-router-dom";
import './home.css'

const Home = () =>(
  <div>
    <div className="main-nav">
      <div className="orgonaization-title">
        <span>HEALTHCARE</span>
        <Link to="/addOrganisation" className="add-orgnaization"><span className="add-orgonaization-button">Add new</span></Link>
      </div>
      <div className="login-section">
        <h4>Loggedin as <strong>Carmela</strong></h4>
      </div>
    </div>
  </div>
);


export default Home;