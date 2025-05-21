import React, { useState } from 'react';
import axios from 'axios';
import './PredictGdp.css'; // Import CSS for styling

function PredictGdp() {
    const [year, setYear] = useState('');
    const [gdp, setGdp] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear previous error messages
        try {
            const response = await axios.get(`https://pfe-backend-pe9b.onrender.com/predict/gdp?year=${year}`);

            console.log("Response:", response.data);  // Log the response data for debugging
            setGdp(response.data.predicted_gdp); // Update the GDP state with the response
        } catch (error) {
            setError('Error fetching GDP prediction');  // Set error if the request fails
            console.error("Error fetching GDP prediction:", error);  // Log the error in the console
        }
    };

    // Function to format the GDP number with spaces
    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Predict GDP</h1>
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
            {gdp && <div className="result">Predicted GDP of Mauritania for the year {year} : {formatNumber(gdp)} USD</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default PredictGdp;
