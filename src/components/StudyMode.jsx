import React, { useState } from 'react';
import { flashcards } from '../data/flashcards';
import '../styles/StudyMode.css';

export default function StudyMode({ onBack, startIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const progress = currentIndex + 1;
  const total = flashcards.length;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="study-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="progress-info">
        <h2>Study Mode</h2>
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
          disabled={currentIndex === flashcards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
