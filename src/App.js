import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Report from './components/Report';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const navigate = useNavigate();

  const startQuiz = () => {
    setScore(0);
    setTotalQuestions(questions.length);
    navigate('/quiz');
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    navigate('/report');
  };

  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <Routes>
      <Route path="/" element={<Home onStartQuiz={startQuiz} />} />
      <Route path="/quiz" element={<Quiz questions={questions} onFinish={finishQuiz} />} />
      <Route path="/report" element={<Report score={score} totalQuestions={totalQuestions} onRestart={restartQuiz} />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
