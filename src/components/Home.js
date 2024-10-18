import React from 'react';
import logo from '../assets/upraised-logo.png';
import './Home.css';

function Home({ onStartQuiz }) {
    return (
        <div className="home-container">
            <img src={logo} alt="Upraised Logo" className="logo" />
            <h1>Welcome to the Quiz App!</h1>
            <p>Test your knowledge with our fun quiz.</p>
            <button className="start-button" onClick={onStartQuiz}>
                Start Quiz
            </button>
        </div>
    );
}

export default Home;
