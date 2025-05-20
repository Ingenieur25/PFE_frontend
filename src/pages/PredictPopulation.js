import React, { useState } from 'react';
import axios from 'axios';
import './PredictPopulation.css';

function PredictPopulation() {
    const [year, setYear] = useState('');
    const [population, setPopulation] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.get(`http://127.0.0.1:5000/predict/population?year=${year}`);
            setPopulation(response.data.predicted_population);
        } catch (error) {
            setError('Error fetching Population prediction');
            console.error("Error fetching Population prediction:", error);
        }
    };

    // Function to format the population number with spaces
    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Predict Population</h1>
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
            {population && <div className="result">Predicted population of Mauritania in the year {year} : {formatNumber(population)} citizens</div>}

            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default PredictPopulation;
