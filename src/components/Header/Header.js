import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="top-section">
                <h1>Corporate Conference 2021</h1>
                <p>Select speakers for the conference. Take as many as within the fund</p>
                <h2>Fund Allocation: 2 Million</h2>
            </div>

            <nav>
                <a href="/shop">Home</a>
                <a href="/orders">Contact</a>
                <a href="/inventory">About Us</a>
            </nav>
        </div>
    );
};

export default Header;