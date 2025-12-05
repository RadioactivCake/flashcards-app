import React, { useState } from 'react';
import Home from './components/Home';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';
import FlashcardList from './components/FlashcardList';
import './styles/App.css';

export default function App() {
  const [currentMode, setCurrentMode] = useState('home');
  const [startIndex, setStartIndex] = useState(0);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  const handleBack = () => {
    setCurrentMode('home');
  };

  const handleCardSelect = (index) => {
    setStartIndex(index);
    setCurrentMode('study');
  };

  return (
    <div className="app">
      {currentMode === 'home' && <Home onModeChange={handleModeChange} />}
      {currentMode === 'study' && <StudyMode onBack={handleBack} startIndex={startIndex} />}
      {currentMode === 'list' && <FlashcardList onBack={handleBack} onCardSelect={handleCardSelect} />}
      {currentMode === 'quiz' && <QuizMode onBack={handleBack} />}
    </div>
  );
}
