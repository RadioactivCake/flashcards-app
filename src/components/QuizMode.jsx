import React, { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import '../styles/QuizMode.css';

export default function QuizMode({ onBack }) {
  // Get one random drink from each of the 11 types
  const quizCards = useMemo(() => {
    const types = {};

    // Group flashcards by type
    flashcards.forEach(card => {
      if (!types[card.type]) {
        types[card.type] = [];
      }
      types[card.type].push(card);
    });

    // Select one random card from each type
    const selectedCards = Object.values(types).map(typeCards => {
      const randomIndex = Math.floor(Math.random() * typeCards.length);
      return typeCards[randomIndex];
    });

    // Shuffle the selected cards
    return selectedCards.sort(() => Math.random() - 0.5);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState(Array(11).fill(null));
  const [answerOptions, setAnswerOptions] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentCard = quizCards[currentIndex];
  const progress = currentIndex + 1;
  const total = quizCards.length;

  // Generate serving method text (special handling for beer)
  const getServingMethod = (card) => {
    if (card.type === "בירה") {
      return card.subtype ? `${card.type} - ${card.subtype}` : card.type;
    }
    return card.serve;
  };

  // Generate 4 answer options when card changes
  useMemo(() => {
    if (!currentCard) return;

    const correctAnswer = getServingMethod(currentCard);
    const options = [correctAnswer];

    // Collect all unique serving methods
    const allServes = [];
    flashcards.forEach(card => {
      const serve = getServingMethod(card);
      if (serve !== correctAnswer && !allServes.includes(serve)) {
        allServes.push(serve);
      }
    });

    // Shuffle and pick 3 wrong answers
    const shuffled = allServes.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 3 && i < shuffled.length; i++) {
      options.push(shuffled[i]);
    }

    // Shuffle options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    setAnswerOptions(shuffledOptions);
    setCorrectAnswerIndex(shuffledOptions.indexOf(correctAnswer));
  }, [currentIndex]);

  const handleAnswerClick = (index) => {
    if (answered) return;

    setAnswered(true);
    setSelectedAnswer(index);

    const isCorrect = index === correctAnswerIndex;

    // Update results
    const newResults = [...results];
    newResults[currentIndex] = isCorrect;
    setResults(newResults);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleCloseResults = () => {
    onBack();
  };

  const getButtonClass = (index) => {
    if (!answered) return 'answer-btn';

    if (index === correctAnswerIndex) {
      return 'answer-btn correct';
    } else if (index === selectedAnswer) {
      return 'answer-btn incorrect';
    }
    return 'answer-btn';
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-modal">
          <h2>Test Complete!</h2>
          <p className="results-message">
            You got {correctCount} out of 11 questions correct!
          </p>
          <button className="next-btn" onClick={handleCloseResults}>
            OK
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="progress-info">
        <p className="progress">{progress} / {total}</p>
      </div>

      {/* Progress Squares */}
      <div className="progress-squares">
        {results.map((result, index) => (
          <div
            key={index}
            className={`progress-square ${
              result === true ? 'correct' : result === false ? 'incorrect' : ''
            }`}
          />
        ))}
      </div>

      {/* Drink Name */}
      <div className="drink-name-display">
        <h2>{currentCard.name}</h2>
      </div>

      {/* Answer Buttons */}
      <div className="answer-buttons">
        {answerOptions.map((option, index) => (
          <button
            key={index}
            className={getButtonClass(index)}
            onClick={() => handleAnswerClick(index)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="next-btn"
        onClick={handleNext}
        disabled={!answered}
      >
        Next Question
      </button>
    </div>
  );
}
