import React, { useState } from 'react';
import Home from './components/Home';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';
import './styles/App.css';

export default function App() {
  const [currentMode, setCurrentMode] = useState('home');

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  const handleBack = () => {
    setCurrentMode('home');
  };

  return (
    <div className="app">
      {currentMode === 'home' && <Home onModeChange={handleModeChange} />}
      {currentMode === 'study' && <StudyMode onBack={handleBack} />}
      {currentMode === 'quiz' && <QuizMode onBack={handleBack} />}
    </div>
  );
}
