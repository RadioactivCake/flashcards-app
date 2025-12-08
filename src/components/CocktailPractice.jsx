import React, { useState, useEffect } from 'react';
import { cocktails, ingredientSpecs, glassTypes, methodOptions } from '../data/cocktails';
import '../styles/CocktailPractice.css';

export default function CocktailPractice({ onBack }) {
  const [currentCocktail, setCurrentCocktail] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedGlass, setSelectedGlass] = useState('');
  const [selectedGarnish, setSelectedGarnish] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({ item: '', spec: '', amount: '' });
  const [showSpecSelection, setShowSpecSelection] = useState(false);

  useEffect(() => {
    selectRandomCocktail();
  }, []);

  const selectRandomCocktail = () => {
    const randomIndex = Math.floor(Math.random() * cocktails.length);
    setCurrentCocktail(cocktails[randomIndex]);
    resetAnswers();
  };

  const resetAnswers = () => {
    setSelectedMethod('');
    setSelectedIngredients([]);
    setSelectedGlass('');
    setSelectedGarnish('');
    setShowAnswer(false);
    setCurrentIngredient({ item: '', spec: '', amount: '' });
    setShowSpecSelection(false);
  };

  const handleIngredientSelect = (item) => {
    const specs = ingredientSpecs[item];

    if (specs && specs.length > 0) {
      // This ingredient needs specification
      setCurrentIngredient({ ...currentIngredient, item });
      setShowSpecSelection(true);
    } else {
      // No specification needed
      setCurrentIngredient({ item, spec: null, amount: '' });
    }
  };

  const handleSpecificationSelect = (spec) => {
    setCurrentIngredient({ ...currentIngredient, spec });
    setShowSpecSelection(false);
  };

  const addIngredient = () => {
    if (currentIngredient.item && currentIngredient.amount) {
      setSelectedIngredients([...selectedIngredients, { ...currentIngredient }]);
      setCurrentIngredient({ item: '', spec: '', amount: '' });
    }
  };

  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  if (!currentCocktail) {
    return <div className="loading">טוען...</div>;
  }

  return (
    <div className="cocktail-practice-container">
      <div className="header">
        <button className="back-btn" onClick={onBack}>
          ← חזרה
        </button>
        <h2>תרגול מתכונים</h2>
      </div>

      <div className="cocktail-name-display">
        <h1>{currentCocktail.name}</h1>
        <p>איך מכינים את הקוקטייל הזה?</p>
      </div>

      <div className="answer-sections">
        {/* Method Selection */}
        <div className="section">
          <h3>שיטת הכנה</h3>
          <div className="method-options">
            {methodOptions.map((method, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedMethod === method ? 'selected' : ''}`}
                onClick={() => setSelectedMethod(method)}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredients Selection */}
        <div className="section">
          <h3>מרכיבים</h3>

          {/* Current ingredient being added */}
          <div className="ingredient-input">
            <select
              value={currentIngredient.item}
              onChange={(e) => handleIngredientSelect(e.target.value)}
              className="ingredient-select"
            >
              <option value="">בחר מרכיב</option>
              {Object.keys(ingredientSpecs).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            {/* Show specification dropdown if needed */}
            {showSpecSelection && ingredientSpecs[currentIngredient.item] && (
              <select
                onChange={(e) => handleSpecificationSelect(e.target.value)}
                className="spec-select"
              >
                <option value="">בחר סוג</option>
                {ingredientSpecs[currentIngredient.item].map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            )}

            {currentIngredient.item && !showSpecSelection && (
              <>
                <input
                  type="text"
                  placeholder="כמות (למשל: 50ml)"
                  value={currentIngredient.amount}
                  onChange={(e) => setCurrentIngredient({ ...currentIngredient, amount: e.target.value })}
                  className="amount-input"
                />
                <button onClick={addIngredient} className="add-btn">הוסף</button>
              </>
            )}
          </div>

          {/* Display selected ingredients */}
          <div className="selected-ingredients">
            {selectedIngredients.map((ing, idx) => (
              <div key={idx} className="ingredient-item">
                <span>{ing.item} {ing.spec ? `(${ing.spec})` : ''} - {ing.amount}</span>
                <button onClick={() => removeIngredient(idx)} className="remove-btn">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Glass Selection */}
        <div className="section">
          <h3>כוס</h3>
          <div className="glass-options">
            {glassTypes.map((glass, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedGlass === glass ? 'selected' : ''}`}
                onClick={() => setSelectedGlass(glass)}
              >
                {glass}
              </button>
            ))}
          </div>
        </div>

        {/* Garnish Input */}
        <div className="section">
          <h3>עיטור (Garnish)</h3>
          <input
            type="text"
            placeholder="לדוגמה: פרוסת לימון"
            value={selectedGarnish}
            onChange={(e) => setSelectedGarnish(e.target.value)}
            className="garnish-input"
          />
        </div>
      </div>

      {/* Check Answer Button */}
      <div className="action-buttons">
        <button onClick={checkAnswer} className="check-btn">בדוק תשובה</button>
        <button onClick={selectRandomCocktail} className="next-btn">קוקטייל הבא</button>
      </div>

      {/* Show Correct Answer */}
      {showAnswer && (
        <div className="answer-display">
          <h3>התשובה הנכונה:</h3>

          <div className="answer-item">
            <strong>שיטה:</strong> {currentCocktail.method}
          </div>

          <div className="answer-item">
            <strong>מרכיבים:</strong>
            <ul>
              {currentCocktail.ingredients.map((ing, idx) => (
                <li key={idx}>
                  {ing.item} {ing.specification ? `(${ing.specification})` : ''} - {ing.amount}
                </li>
              ))}
            </ul>
          </div>

          <div className="answer-item">
            <strong>כוס:</strong> {currentCocktail.glass}
          </div>

          <div className="answer-item">
            <strong>עיטור:</strong> {currentCocktail.garnish}
          </div>
        </div>
      )}
    </div>
  );
}
