import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure you import the CSS for styling

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/predict_gdp">Predict GDP</Link></li>
                <li className="nav-item"><Link to="/predict_life_expectancy">Predict Life Expectancy</Link></li>
                <li className="nav-item"><Link to="/predict_population">Predict Population</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
