import React, { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import '../styles/QuizMode.css';

export default function QuizMode({ onBack }) {
  const quizCards = useMemo(() => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = quizCards[currentIndex];
  const progress = currentIndex + 1;
  const total = quizCards.length;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="quiz-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="progress-info">
        <h2>Quiz Mode</h2>
        <p className="progress">{progress} / {total}</p>
      </div>

      <div className="flashcard-wrapper">
        <div
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flashcard-front">
            <p className="drink-name">{currentCard.name}</p>
          </div>
          <div className="flashcard-back">
            <p className="label">Type</p>
            <p className="value">{currentCard.type}</p>
            {currentCard.subtype && (
              <>
                <p className="label">Subtype</p>
                <p className="value">{currentCard.subtype}</p>
              </>
            )}
            <p className="label">Serve</p>
            <p className="value">{currentCard.serve}</p>
          </div>
        </div>
      </div>

      <p className="flip-hint">Click card to flip</p>

      <div className="navigation-buttons">
        <button
          className="nav-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentIndex === quizCards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
