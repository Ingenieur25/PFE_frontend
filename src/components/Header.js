import React from 'react';
import './Header.css';  // Make sure to add custom styles

function Header() {
    return (
        <header className="header">
            <div className="logo-left">
                <img src="/Logo_inpt.PNG" alt="School Logo" className="logo-image" />
            </div>
            <div className="header-text">
                <h1>Welcome to Our Internship Project</h1>
                <p>School: INPT | SOCIETY: ANSADE</p>
            </div>
            <div className="logo-right">
                <img src="/Logo_ANSADE.png" alt="Internship Logo" className="logo-image" />
            </div>
        </header>
    );
}

export default Header;
