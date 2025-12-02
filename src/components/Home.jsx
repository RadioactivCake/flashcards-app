import React from 'react';
import '../styles/Home.css';

export default function Home({ onModeChange }) {
  return (
    <div className="home-container">
      <h1 className="app-title">Drink Study App</h1>
      <p className="app-subtitle">Master beverage knowledge</p>

      <div className="button-container">
        <button
          className="primary-btn study-btn"
          onClick={() => onModeChange('study')}
        >
          Study Mode
        </button>

        <button
          className="primary-btn quiz-btn"
          onClick={() => onModeChange('quiz')}
        >
          Quiz Mode
        </button>
      </div>
    </div>
  );
}
