import React from 'react';
import './Home.css'; // Assurez-vous d'importer le fichier CSS

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Mauritania Economic Indicator Prediction Application.</h1>
            <p className="home-description">
            This web application uses advanced machine learning models to enable you to predict economic indicators (GDP) and demographic data (life expectancy, population) of Mauritania for the coming years. It simplifies the prediction process based on historical data and allows you to explore future trends through a user-friendly interface.
            </p>
        </div>
    );
}

export default Home;
