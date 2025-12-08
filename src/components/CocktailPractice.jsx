import React, { useState, useEffect } from 'react';
import { cocktails, ingredientSpecs, glassTypes, methodOptions, garnishOptions } from '../data/cocktails';
import '../styles/CocktailPractice.css';

export default function CocktailPractice({ onBack }) {
  const [currentCocktail, setCurrentCocktail] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedGlass, setSelectedGlass] = useState('');
  const [selectedGarnish, setSelectedGarnish] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // For building an ingredient
  const [currentIngredient, setCurrentIngredient] = useState({ item: '', spec: '', amount: '' });
  const [showSpecSelection, setShowSpecSelection] = useState(false);
  const [showAmountInput, setShowAmountInput] = useState(false);

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
    setShowAmountInput(false);
  };

  const handleIngredientSelect = (item) => {
    const specs = ingredientSpecs[item];

    if (specs && specs.length > 0) {
      // This ingredient needs specification
      setCurrentIngredient({ item, spec: '', amount: '' });
      setShowSpecSelection(true);
      setShowAmountInput(false);
    } else {
      // No specification needed, go straight to amount
      setCurrentIngredient({ item, spec: null, amount: '' });
      setShowSpecSelection(false);
      setShowAmountInput(true);
    }
  };

  const handleSpecificationSelect = (spec) => {
    setCurrentIngredient({ ...currentIngredient, spec });
    setShowSpecSelection(false);
    setShowAmountInput(true);
  };

  const handleAddIngredient = () => {
    if (currentIngredient.amount.trim()) {
      setSelectedIngredients([...selectedIngredients, { ...currentIngredient }]);

      // Reset for next ingredient
      setCurrentIngredient({ item: '', spec: '', amount: '' });
      setShowAmountInput(false);
    }
  };

  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
  };

  const cancelIngredient = () => {
    setCurrentIngredient({ item: '', spec: '', amount: '' });
    setShowSpecSelection(false);
    setShowAmountInput(false);
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
        <div className="cocktail-badge">קוקטייל נוכחי</div>
        <h1>{currentCocktail.name}</h1>
        <p>איך מכינים את הקוקטייל הזה?</p>
      </div>

      <div className="answer-sections">
        {/* Method Selection */}
        <div className="section">
          <h3>שיטת הכנה {selectedMethod && '✓'}</h3>
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
          <h3>מרכיבים {selectedIngredients.length > 0 && `(${selectedIngredients.length})`}</h3>

          {/* Display selected ingredients */}
          {selectedIngredients.length > 0 && (
            <div className="selected-ingredients">
              {selectedIngredients.map((ing, idx) => (
                <div key={idx} className="ingredient-item">
                  <span>
                    {ing.item} {ing.spec ? `(${ing.spec})` : ''} - {ing.amount}
                  </span>
                  <button onClick={() => removeIngredient(idx)} className="remove-btn">×</button>
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Select ingredient type */}
          {!currentIngredient.item && !showSpecSelection && !showAmountInput && (
            <div className="ingredient-selection-step">
              <h4>בחר מרכיב:</h4>
              <div className="ingredient-grid">
                {Object.keys(ingredientSpecs).map((item) => (
                  <button
                    key={item}
                    className="option-btn small"
                    onClick={() => handleIngredientSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select specification (if needed) */}
          {showSpecSelection && currentIngredient.item && (
            <div className="ingredient-selection-step">
              <h4>בחר סוג {currentIngredient.item}:</h4>
              <div className="spec-grid">
                {ingredientSpecs[currentIngredient.item].map((spec) => (
                  <button
                    key={spec}
                    className="option-btn small"
                    onClick={() => handleSpecificationSelect(spec)}
                  >
                    {spec}
                  </button>
                ))}
              </div>
              <button onClick={cancelIngredient} className="cancel-btn">ביטול</button>
            </div>
          )}

          {/* Step 3: Type amount */}
          {showAmountInput && currentIngredient.item && (
            <div className="ingredient-selection-step amount-step">
              <h4>
                כמה {currentIngredient.item} {currentIngredient.spec ? `(${currentIngredient.spec})` : ''}?
              </h4>
              <div className="amount-input-container">
                <input
                  type="text"
                  placeholder="לדוגמה: 2oz, 1/2oz, splash"
                  value={currentIngredient.amount}
                  onChange={(e) => setCurrentIngredient({ ...currentIngredient, amount: e.target.value })}
                  className="amount-input"
                  autoFocus
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleAddIngredient();
                  }}
                />
                <button onClick={handleAddIngredient} className="add-btn">הוסף</button>
              </div>
              <button onClick={cancelIngredient} className="cancel-btn">ביטול</button>
            </div>
          )}
        </div>

        {/* Glass Selection */}
        <div className="section">
          <h3>כוס {selectedGlass && '✓'}</h3>
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

        {/* Garnish Selection */}
        <div className="section">
          <h3>עיטור (Garnish) {selectedGarnish && '✓'}</h3>
          <div className="garnish-options">
            {garnishOptions.map((garnish, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedGarnish === garnish ? 'selected' : ''}`}
                onClick={() => setSelectedGarnish(garnish)}
              >
                {garnish}
              </button>
            ))}
          </div>
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
