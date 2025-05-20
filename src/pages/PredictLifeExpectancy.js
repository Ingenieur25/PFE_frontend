import React, { useState } from 'react';
import axios from 'axios';
import './PredictLifeExpectancy.css';

function PredictLifeExpectancy() {
    const [year, setYear] = useState('');
    const [lifeExpectancy, setLifeExpectancy] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.get(`http://127.0.0.1:5000/predict/life_expectancy?year=${year}`);
            setLifeExpectancy(response.data.predicted_life_expectancy);
        } catch (error) {
            setError('Error fetching Life Expectancy prediction');
            console.error("Error fetching Life Expectancy prediction:", error);
        }
    };

    // Function to conditionally format the life expectancy message
    const formatLifeExpectancy = (lifeExpectancy) => {
        if (lifeExpectancy >= 100) {
            return 'about 100 years';
        }
        return `${lifeExpectancy.toFixed(2)} years`;
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Predict Life Expectancy</h1>
            <form className="input-form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="input-field"
                />
                <button type="submit" className="submit-button">Get Prediction</button>
            </form>
            {lifeExpectancy && <div className="result">Predicted life expectancy of Mauritania in the year {year} : {formatLifeExpectancy(lifeExpectancy)}</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default PredictLifeExpectancy;
