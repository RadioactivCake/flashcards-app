import React from 'react';
import { flashcards } from '../data/flashcards';
import '../styles/FlashcardList.css';

export default function FlashcardList({ onBack, onCardSelect }) {
  return (
    <div className="list-container">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="list-header">
        <h2>All Flashcards</h2>
        <p className="total-count">{flashcards.length} drinks</p>
      </div>

      <div className="flashcard-list">
        {flashcards.map((card, index) => (
          <div
            key={card.id}
            className="list-item"
            onClick={() => onCardSelect(index)}
          >
            <div className="list-item-number">{index + 1}</div>
            <div className="list-item-content">
              <h3 className="list-item-name">{card.name}</h3>
              <p className="list-item-type">{card.type}</p>
            </div>
            <div className="list-item-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}
