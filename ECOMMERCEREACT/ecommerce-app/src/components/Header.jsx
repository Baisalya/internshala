import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logotext">Ecommerce</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <span className='logo'>Search</span>
            </div>
            <div className="user-actions">
                <button className='logo'>Login</button>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
             </div>
        </header>
    );
}

export default Header;
