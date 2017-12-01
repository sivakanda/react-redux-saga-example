import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="lead">Welcome to GLS App</h1>
    <div>
      <Link to="accounts">
        <button className="btn btn-lg btn-primary"> Go to Accounts Page </button>
      </Link>
    </div>
  </div>
);

export default HomePage;
