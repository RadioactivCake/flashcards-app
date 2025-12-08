// Cocktail Recipe Data
// Each cocktail has:
// - name: Cocktail name (English)
// - method: How to make it (Hebrew)
// - ingredients: Array of ingredients with amounts and specifications
// - garnish: Garnish details (Hebrew)
// - glass: Type of glass (Hebrew)

export const cocktails = [
  {
    id: 1,
    name: "Mojito",
    method: "מדל (muddle) נענע עם סירופ בכוס, הוסף ליים, קרח מעוך, רום לבן, והשלם עם סודה",
    ingredients: [
      { item: "רום", specification: "לבן", amount: "50ml" },
      { item: "נענע טריה", specification: null, amount: "10 עלים" },
      { item: "סוכר חום/סירופ", specification: null, amount: "2 כפיות" },
      { item: "ליים", specification: null, amount: "חצי פרי" },
      { item: "סודה", specification: null, amount: "להשלמה" }
    ],
    garnish: "ענף נענה ופרוסת לייםr",
    glass: "היי בול"
  },
  {
    id: 2,
    name: "Margarita",
    method: "שייקר עם קרח - טקילה, טריפל סק, מיץ לייםr, ושייק היטב. מרח מלח על שפת הכוס",
    ingredients: [
      { item: "טקילה", specification: "סילבר", amount: "50ml" },
      { item: "ליקר", specification: "טריפל סק", amount: "25ml" },
      { item: "מיץ לייםr", specification: null, amount: "25ml" },
      { item: "סירופ אגבה", specification: null, amount: "15ml" }
    ],
    garnish: "מלח על השפה ופרוסת לייםr",
    glass: "מרגריטה/קופה"
  },
  {
    id: 3,
    name: "Negroni",
    method: "בנה בכוס - ג'ין, קמפרי, ורמוט אדום בחלקים שווים עם קרח, ערבב",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "30ml" },
      { item: "קמפרי", specification: null, amount: "30ml" },
      { item: "ורמוט", specification: "רוסו (אדום)", amount: "30ml" }
    ],
    garnish: "קליפת תפוז",
    glass: "לואו בול"
  },
  {
    id: 4,
    name: "Cosmopolitan",
    method: "שייקר עם קרח - וודקה, טריפל סק, מיץ חמוציות, מיץ לייםr ושייק",
    ingredients: [
      { item: "וודקה", specification: null, amount: "40ml" },
      { item: "ליקר", specification: "טריפל סק", amount: "15ml" },
      { item: "מיץ חמוציות", specification: null, amount: "30ml" },
      { item: "מיץ לייםr", specification: null, amount: "15ml" }
    ],
    garnish: "קליפת לימון מעל",
    glass: "מרטיני/קופה"
  },
  {
    id: 5,
    name: "Whiskey Sour",
    method: "שייקר עם קרח - וויסקי, מיץ לימון, סירופ פשוט, חלבון ביצה (אופציונלי) ושייק חזק",
    ingredients: [
      { item: "וויסקי", specification: "בורבון", amount: "50ml" },
      { item: "מיץ לימון", specification: null, amount: "25ml" },
      { item: "סירופ פשוט", specification: null, amount: "20ml" },
      { item: "חלבון ביצה", specification: null, amount: "אופציונלי" }
    ],
    garnish: "פרוסת לימון ודובדבן מראשינו",
    glass: "לואו בול"
  },
  {
    id: 6,
    name: "Espresso Martini",
    method: "שייקר עם קרח - וודקה, ליקר קפה, אספרסו טרי, סירופ ושייק חזק עד קצף",
    ingredients: [
      { item: "וודקה", specification: null, amount: "50ml" },
      { item: "ליקר", specification: "קלואה/קפה", amount: "25ml" },
      { item: "אספרסו", specification: null, amount: "30ml" },
      { item: "סירופ פשוט", specification: null, amount: "10ml" }
    ],
    garnish: "3 פולי קפה",
    glass: "מרטיני/קופה"
  }
];

// Available options for ingredient specifications
export const ingredientSpecs = {
  "וודקה": null, // No specification needed
  "ג'ין": null,
  "רום": ["לבן", "גולד", "כהה", "ספייס"],
  "טקילה": ["סילבר", "גולד", "אנייחו", "רפוסדו"],
  "וויסקי": ["בורבון", "סקוטש", "אירי", "קנדי"],
  "ליקר": ["טריפל סק", "קלואה/קפה", "אמרטו", "ביילי'ס", "פרנג'ליקו", "קמבוזיה"],
  "ורמוט": ["ביאנקו (לבן)", "רוסו (אדום)", "דריי (יבש)"],
  "מיץ לימון": null,
  "מיץ לייםr": null,
  "מיץ חמוציות": null,
  "מיץ תפוזים": null,
  "סודה": null,
  "טוניק": null,
  "סירופ פשוט": null,
  "סירופ אגבה": null,
  "סוכר חום/סירופ": null,
  "נענה טריה": null,
  "לייםr": null,
  "אספרסו": null,
  "חלבון ביצה": null,
  "קמפרי": null,
  "אפרול": null
};

// Available glass types
export const glassTypes = [
  "היי בול",
  "לואו בול",
  "מרטיני/קופה",
  "מרגריטה/קופה",
  "שוט",
  "כוס וויסקי"
];

// Common methods
export const methodOptions = [
  "שייקר - שייק עם קרח ומיין",
  "בילד - בנה ישירות בכוס עם קרח",
  "מדל - מעך רכיבים בתחתית הכוס",
  "סטיר - ערבב עם קרח בכוס ערבוב",
  "בלנד - שייק עם קרח בבלנדר"
];
