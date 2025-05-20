import React from 'react';
import Header from './components/Header';  // Adjust the path as needed
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PredictGdp from './pages/PredictGdp';
import PredictLifeExpectancy from './pages/PredictLifeExpectancy';
import PredictPopulation from './pages/PredictPopulation';

function App() {
    return (
        <Router>
            <Header />  {/* New Header Bar */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/predict_gdp" element={<PredictGdp />} />
                <Route path="/predict_life_expectancy" element={<PredictLifeExpectancy />} />
                <Route path="/predict_population" element={<PredictPopulation />} />
            </Routes>
        </Router>
    );
}

export default App;
