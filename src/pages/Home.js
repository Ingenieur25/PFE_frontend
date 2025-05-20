import React from 'react';
import './Home.css'; // Assurez-vous d'importer le fichier CSS

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Mauritania Economic Indicator Prediction Application.</h1>
            <p className="home-description">
            This application enables you to predict key economic indicators, including the GDP, population, and life expectancy of Mauritania for any given year. It simplifies the process of making informed predictions based on historical data, allowing you to explore future trends in a user-friendly interface. The application utilizes advanced machine learning models.
            </p>
        </div>
    );
}

export default Home;
