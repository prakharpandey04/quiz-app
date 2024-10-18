// src/mockApi.js
export const startQuiz = async () => {
    return [
        { id: 1, question: "What is 2 + 2?", choices: ["3", "4", "5"], correct: [1] },
        { id: 2, question: "Which are programming languages?", choices: ["HTML", "Python", "CSS"], correct: [1] },
    ];
};

export const submitAnswer = async (questionId, selectedChoices, timeTaken) => {
    return { success: true };
};

export const finishQuiz = async () => {
    return { score: 2, correctAnswers: 2, incorrectAnswers: 0 };
};
