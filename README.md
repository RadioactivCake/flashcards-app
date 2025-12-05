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

## Making Changes & Uploading to Vercel

### 1. Set Up Git (One-time Setup)

Open Command Prompt/PowerShell and navigate to the Webapp folder:

```bash
cd C:\Users\poket\Desktop\Webapp
```

Initialize git:
```bash
git init
git add .
git commit -m "Initial commit: Flashcard web app"
```

### 2. Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (name it `flashcards-app` or similar)
3. **Leave all checkboxes unchecked** (you already have README and .gitignore)
4. Click "Create repository"
5. You'll see instructions. Copy the commands and run them in your Command Prompt:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flashcards-app.git
git push -u origin main
```

(Replace `YOUR_USERNAME` with your GitHub username)

### 3. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your repo URL: `https://github.com/YOUR_USERNAME/flashcards-app`
4. Click "Import" → "Deploy"
5. **Done!** You'll get a live URL (e.g., `https://flashcards-app.vercel.app`)

---

### Making Updates (The Easy Part!)

**Every time you want to change something:**

1. Edit any file in your `Webapp` folder (using a text editor like VS Code)
2. Open Command Prompt and go to the folder:
   ```bash
   cd C:\Users\poket\Desktop\Webapp
   ```
3. Run these commands:
   ```bash
   git add .
   git commit -m "Update: describe what you changed"
   git push
   ```
4. **Wait 30 seconds** - Vercel automatically rebuilds and deploys!
5. Refresh your site - changes are live!

---

### Example: Adding a New Drink

Let's say you want to add a new drink to the list:

**Step 1:** Open `src/data/flashcards.js` in a text editor

**Step 2:** Add a new drink at the end of the list (before the closing bracket):
```javascript
  { id: 127, name: "My New Drink", type: "Whiskey", subtype: "Irish", serve: "Neat" }
];
```

**Step 3:** Save the file

**Step 4:** Go to Command Prompt:
```bash
cd C:\Users\poket\Desktop\Webapp
git add .
git commit -m "Add new drink: My New Drink"
git push
```

**Step 5:** Within 30 seconds, your friends will see the new drink when they visit the site!

---

### Example: Changing Button Colors

**Step 1:** Open `src/styles/Home.css`

**Step 2:** Find `.study-btn` and change the gradient:
```css
.study-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change to something like: */
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%);
}
```

**Step 3:** Save and upload:
```bash
cd C:\Users\poket\Desktop\Webapp
git add .
git commit -m "Change study button color to red"
git push
```

**Done!** Your friends see the new button color immediately!

---

### Helpful Git Commands

**Check what files changed:**
```bash
git status
```

**See your changes before uploading:**
```bash
git diff
```

**View your commit history:**
```bash
git log --oneline
```

**Undo last commit (if you made a mistake):**
```bash
git reset HEAD~1
```

---

### Files You'll Edit Most Often

- `src/data/flashcards.js` - Add/remove drinks
- `src/components/Home.jsx` - Change home screen text/layout
- `src/components/StudyMode.jsx` - Modify study mode features
- `src/components/QuizMode.jsx` - Modify quiz mode features
- `src/styles/*.css` - Change colors, sizes, fonts
- `index.html` - Change page title or meta tags

---

### What NOT to Touch

- `package.json` - unless adding new packages
- `vite.config.js` - unless you know what you're doing
- `node_modules/` - auto-generated, never edit

---

### Troubleshooting

**"Git is not recognized"**
- Install Git from https://git-scm.com/
- Restart Command Prompt

**"fatal: not a git repository"**
- Make sure you're in the right folder: `C:\Users\poket\Desktop\Webapp`
- Run: `git init`

**Changes not showing up**
- Wait 60 seconds (Vercel takes time to rebuild)
- Refresh your browser (Ctrl+Shift+Delete for hard refresh)
- Check Vercel dashboard to see if deployment finished

---

### Share Your Live Site

Once deployed, share this link with your friends:
```
https://flashcards-app.vercel.app
```

They can use it on iPhone, Android, or any browser - and they'll always see your latest updates!

## License

This is a personal learning project based on the original Android Flashcards App.
