import React from 'react';
import { Link, IndexLink } from 'react-router';
//import '../../styles/style.css';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/accounts" activeClassName="active">Accounts</Link>
      {" | "}
      <Link to="/user-info" activeClassName="active">User Information</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  </div>
);

export default Header;
