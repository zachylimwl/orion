import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../asset/img/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
      	<Link to = '/'><img src={logo} alt=""/></Link>
      	<ul>
      		<li><Link to ='/client'>Hire</Link></li>
      		<li><Link to ='/freelancer'>Freelance</Link></li>
      		<li><Link to ='/login'>Sign In</Link></li>
      		<li><Link to ='/register'>Join</Link></li>
      	</ul>
      </header>
    );
  }
}

export default Header;