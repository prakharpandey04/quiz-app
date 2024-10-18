import React, { useState } from 'react';
import './Quiz.css';

function Quiz({ questions, onFinish }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    const totalQuestions = questions.length;

    const handleNext = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            onFinish(score + (selectedOption === questions[currentQuestionIndex].correctAnswer ? 1 : 0));
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h2>Question</h2>
                <p>{currentQuestionIndex + 1}/{totalQuestions}</p>
            </div>
            <div className="quiz-question">
                <h3>{questions[currentQuestionIndex].questionText}</h3>
            </div>
            <div className="quiz-options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <div
                        key={index}
                        className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <button
                className="next-button"
                onClick={handleNext}
                disabled={selectedOption === null}
            >
                Next
            </button>
        </div>
    );
}

export default Quiz;
