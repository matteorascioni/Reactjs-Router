import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
        <h3>logo</h3>

        <ul className="Links">
            <Link style={{color: 'white'}} to="/">
                <li>
                    Home
                </li>
            </Link>
            <Link style={{color: 'white'}} to="/about">
                <li>
                    About
                </li>
            </Link>
            <Link style={{color: 'white'}} to="/contact">
                <li>
                    Contact
                </li>
            </Link>
        </ul>
    </div>
  );
}

export default Navbar;