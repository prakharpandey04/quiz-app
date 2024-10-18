import React from 'react';
import './Report.css';

function Report({ score, totalQuestions, onRestart }) {
    const percentage = totalQuestions ? (score / totalQuestions) * 100 : 0;

    return (
        <div className="result-container">
            <h2>Your Result</h2>
            <div className="result-circle">
                <div className="result-score">{Math.round(percentage)}%</div>
            </div>
            <div className="result-summary">
                <p>{score} Correct</p>
                <p>{totalQuestions - score} Incorrect</p>
            </div>
            <button className="restart-button" onClick={onRestart}>
                Start Again
            </button>
        </div>
    );
}

export default Report;
