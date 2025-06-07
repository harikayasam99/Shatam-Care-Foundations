import React, { useState } from 'react';

const MCQQuestionPage = ({ level, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Sample questions for different levels
  const questionSets = {
    'Level 1': [
      {
        id: 1,
        question: "What is the fundamental building block of web development?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1
      }
    ],
    'Level 2': [
      {
        id: 1,
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To create variables", "To refer to global object", "To refer to current object", "To create functions"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-weight", "bold", "text-bold"],
        correctAnswer: 1
      }
    ],
    'Level 3': [
      {
        id: 1,
        question: "What is a closure in JavaScript?",
        options: ["A type of loop", "A function with access to outer scope", "A data structure", "An event handler"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which design pattern is commonly used in React applications?",
        options: ["Singleton", "Observer", "Component Pattern", "Factory"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the purpose of async/await in JavaScript?",
        options: ["To create loops", "To handle asynchronous operations", "To define classes", "To create objects"],
        correctAnswer: 1
      }
    ]
  };

  const questions = questionSets[level] || questionSets['Level 1'];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const handleComplete = () => {
    const score = calculateScore();
    onComplete && onComplete(score);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="mcq-container">
        <div className="mcq-card">
          <div className="results-header">
            <h2 className="mcq-title">Assessment Results - {level}</h2>
          </div>
          
          <div className="results-content">
            <div className="score-display">
              <div className="score-circle">
                <span className="score-percentage">{score.percentage}%</span>
              </div>
              <p className="score-text">
                You scored {score.correct} out of {score.total} questions correctly!
              </p>
            </div>
            
            <div className="performance-message">
              {score.percentage >= 80 && (
                <div className="message success">
                  <strong>Excellent!</strong> You have mastered this level.
                </div>
              )}
              {score.percentage >= 60 && score.percentage < 80 && (
                <div className="message good">
                  <strong>Good job!</strong> You have a solid understanding.
                </div>
              )}
              {score.percentage < 60 && (
                <div className="message needs-improvement">
                  <strong>Keep practicing!</strong> Review the material and try again.
                </div>
              )}
            </div>
            
            <div className="results-actions">
              <button className="btn btn-secondary" onClick={onBack}>
                Back to Courses
              </button>
              <button className="btn btn-primary" onClick={handleComplete}>
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="mcq-container">
      <div className="mcq-card">
        <div className="mcq-header">
          <div className="level-info">
            <h2 className="mcq-title">{level} Assessment</h2>
            <p className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <div className="question-content">
          <h3 className="question-text">{currentQ.question}</h3>
          
          <div className="options-container">
            {currentQ.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={index}
                  checked={selectedAnswers[currentQ.id] === index}
                  onChange={() => handleAnswerSelect(currentQ.id, index)}
                  className="option-radio"
                />
                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mcq-actions">
          <button 
            className="btn btn-secondary" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
        
          
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={selectedAnswers[currentQ.id] === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .mcq-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family: 'Roboto', sans-serif;
        }
        
        .mcq-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          max-width: 800px;
          width: 100%;
          overflow: hidden;
        }
        
        .mcq-header {
          background: #1976d2;
          color: white;
          padding: 2rem;
        }
        
        .level-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .mcq-title {
          font-size: 1.8rem;
          font-weight: 500;
          margin: 0;
        }
        
        .question-counter {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }
        
        .progress-bar {
          background: rgba(255,255,255,0.2);
          height: 6px;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          background: white;
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        
        .question-content {
          padding: 2.5rem;
        }
        
        .question-text {
          font-size: 1.3rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        .options-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .option-label {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #fafafa;
        }
        
        .option-label:hover {
          border-color: #1976d2;
          background: #f0f7ff;
        }
        
        .option-label:has(.option-radio:checked) {
          border-color: #1976d2;
          background: #e3f2fd;
        }
        
        .option-radio {
          margin-right: 1rem;
          accent-color: #1976d2;
          transform: scale(1.2);
        }
        
        .option-text {
          font-size: 1.1rem;
          color: #333;
        }
        
        .mcq-actions {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          background: #f8f9fa;
          gap: 1rem;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-primary {
          background: #1976d2;
          color: white;
        }
        
        .btn-primary:hover:not(:disabled) {
          background: #1565c0;
        }
        
        .btn-secondary {
          background: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
        }
        
        .btn-secondary:hover:not(:disabled) {
          background: #e0e0e0;
        }
        
        .results-header {
          background: #4caf50;
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .results-content {
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .score-display {
          margin-bottom: 2rem;
        }
        
        .score-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4caf50, #45a049);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
        }
        
        .score-percentage {
          font-size: 2rem;
          font-weight: bold;
          color: white;
        }
        
        .score-text {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 2rem;
        }
        
        .performance-message {
          margin-bottom: 2rem;
        }
        
        .message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
        }
        
        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        
        .message.good {
          background: #fff3cd;
          color: #856404;
          border: 1px solid #ffeaa7;
        }
        
        .message.needs-improvement {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .results-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        @media (max-width: 768px) {
          .mcq-container {
            padding: 0.5rem;
          }
          
          .level-info {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          
          .question-content {
            padding: 1.5rem;
          }
          
          .mcq-actions {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .results-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MCQQuestionPage;