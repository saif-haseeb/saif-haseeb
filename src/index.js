import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
