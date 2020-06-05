import React from 'react';
import logo from './MyBillPayment.png';
import {Link} from 'react-router-dom';

function Navigation() {
   return (
      <nav className="white">
         <Link to="/">
            <img className="logo" src={logo} alt=""/>
         </Link>
         <ul className="nav-links">
            <Link to='/nontesting'>
               <li>Non Testing</li>
            </Link>
            <Link to='/testing'>
               <li>Testing</li>
            </Link>
         </ul>
      </nav>
   );
}

export default Navigation;