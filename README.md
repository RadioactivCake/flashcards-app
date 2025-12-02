# Drink Study App - Web Version

A web-based flashcard application for learning about alcoholic beverages, their types, and serving styles. Originally an Android app, now available for web browsers (perfect for iPhone users!).

## Features

- **Study Mode**: Flip through all 126 drinks sequentially
- **Quiz Mode**: Test your knowledge with 10 random drinks
- **Mobile Responsive**: Works great on phones, tablets, and desktops
- **No Backend Required**: Runs entirely in your browser
- **Interactive Flashcards**: Click to flip cards and reveal answers

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Deployment

You can deploy this web app to any static hosting service:

### GitHub Pages
```bash
npm run build
# Upload the contents of 'dist/' to GitHub Pages
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist/' folder to Netlify
```

### Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel
```

## Project Structure

```
Webapp/
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Home screen
│   │   ├── StudyMode.jsx      # Study all 126 cards
│   │   └── QuizMode.jsx       # Quiz with 10 random cards
│   ├── data/
│   │   └── flashcards.js      # 126 drink data
│   ├── styles/
│   │   ├── App.css            # Global styles
│   │   ├── Home.css           # Home screen styles
│   │   ├── StudyMode.css      # Study mode styles
│   │   └── QuizMode.css       # Quiz mode styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

## Features in Detail

### Study Mode
- Browse all 126 drinks one by one
- Click any flashcard to flip and reveal information
- View drink type, subtype, and serving style
- Previous/Next navigation buttons
- Progress indicator (e.g., "45 / 126")

### Quiz Mode
- 10 randomly selected drinks
- Same flip-card interaction
- Perfect for quick testing
- New random selection each time you enter Quiz Mode

## Drink Categories

The app includes drinks across these categories:
- Vodka (9 brands)
- Gin (6 brands)
- Rum (11 variants)
- Tequila (10 brands)
- Aperitif (15 types)
- Digestif (5 types)
- Brandy/Cognac (9 variants)
- Liqueur (14 brands)
- Whiskey (20 brands - malt, blended, Irish, American)
- Beer (15 brands - lager, ale, wheat, stout)
- Wine (13 brands - red and white)

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Responsive styling with mobile-first design
- **JavaScript ES6+** - Modern JavaScript

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Users

1. **Study Mode**: Take your time going through all 126 drinks. The randomness of Quiz Mode makes this essential.
2. **Quiz Mode**: Try to answer before flipping the card for better learning.
3. **Responsive Design**: The app adapts to your screen size - works great on phones!
4. **No Internet Required**: Once loaded, the app works offline.

## License

This is a personal learning project based on the original Android Flashcards App.
