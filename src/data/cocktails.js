// ============================================
// HOW TO ADD A NEW COCKTAIL
// ============================================
// Copy this template and add it to the cocktails array below:
//
// {
//   id: 7,  // Use the next available number
//   name: "Old Fashioned",  // Cocktail name in ENGLISH
//   method: "בילד - בנה ישירות בכוס עם קרח",  // Method in HEBREW (choose from methodOptions below)
//   ingredients: [
//     { item: "וויסקי", specification: "בורבון", amount: "2oz" },
//     { item: "סוכר חום/סירופ", specification: null, amount: "1 קוביה" }
//   ],
//   garnish: "קליפת תפוז ודובדבן",  // Garnish in HEBREW (choose from garnishOptions below)
//   glass: "לואו בול"  // Glass type in HEBREW (choose from glassTypes below)
// }
//
// IMPORTANT:
// - Items must exist in ingredientSpecs below
// - If an item has specifications (like "רום": ["לבן", "גולד"]), you must provide one
// - If an item has null (like "וודקה": null), set specification: null
// - Method must be one of the methodOptions
// - Garnish must be one of the garnishOptions
// - Glass must be one of the glassTypes
// - Amount should be in oz (ounces) format: "2oz", "1.5oz", "1/2oz", etc.
// ============================================

export const cocktails = [
  {
    id: 1,
    name: "Mojito",
    method: "מדל - מעך רכיבים בתחתית הכוס",
    ingredients: [
      { item: "רום", specification: "לבן", amount: "2oz" },
      { item: "נענה טריה", specification: null, amount: "10 עלים" },
      { item: "סוכר חום/סירופ", specification: null, amount: "2 כפיות" },
      { item: "ליים", specification: null, amount: "חצי פרי" },
      { item: "סודה", specification: null, amount: "להשלמה" }
    ],
    garnish: "ענף נענה ופרוסת ליים",
    glass: "היי בול"
  },
  {
    id: 2,
    name: "Margarita",
    method: "שייקר - שייק עם קרח ומיין",
    ingredients: [
      { item: "טקילה", specification: "סילבר", amount: "2oz" },
      { item: "ליקר", specification: "טריפל סק", amount: "1oz" },
      { item: "מיץ ליים", specification: null, amount: "1oz" },
      { item: "סירופ אגבה", specification: null, amount: "1/2oz" }
    ],
    garnish: "מלח על השפה ופרוסת ליים",
    glass: "מרגריטה/קופה"
  },
  {
    id: 3,
    name: "Negroni",
    method: "בילד - בנה ישירות בכוס עם קרח",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1oz" },
      { item: "קמפרי", specification: null, amount: "1oz" },
      { item: "ורמוט", specification: "רוסו (אדום)", amount: "1oz" }
    ],
    garnish: "קליפת תפוז",
    glass: "לואו בול"
  },
  {
    id: 4,
    name: "Cosmopolitan",
    method: "שייקר - שייק עם קרח ומיין",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5oz" },
      { item: "ליקר", specification: "טריפל סק", amount: "1/2oz" },
      { item: "מיץ חמוציות", specification: null, amount: "1oz" },
      { item: "מיץ ליים", specification: null, amount: "1/2oz" }
    ],
    garnish: "קליפת לימון",
    glass: "מרטיני/קופה"
  },
  {
    id: 5,
    name: "Whiskey Sour",
    method: "שייקר - שייק עם קרח ומיין",
    ingredients: [
      { item: "וויסקי", specification: "בורבון", amount: "2oz" },
      { item: "מיץ לימון", specification: null, amount: "3/4oz" },
      { item: "סירופ פשוט", specification: null, amount: "1/2oz" },
      { item: "חלבון ביצה", specification: null, amount: "אופציונלי" }
    ],
    garnish: "פרוסת לימון ודובדבן מראשינו",
    glass: "לואו בול"
  },
  {
    id: 6,
    name: "Espresso Martini",
    method: "שייקר - שייק עם קרח ומיין",
    ingredients: [
      { item: "וודקה", specification: null, amount: "2oz" },
      { item: "ליקר", specification: "קלואה/קפה", amount: "1oz" },
      { item: "אספרסו", specification: null, amount: "1oz" },
      { item: "סירופ פשוט", specification: null, amount: "1/2oz" }
    ],
    garnish: "3 פולי קפה",
    glass: "מרטיני/קופה"
  }
];

// ============================================
// INGREDIENT SPECIFICATIONS
// ============================================
// Add new ingredients here. Set to null if no specification needed.
// Set to array of options if the ingredient requires specification.
export const ingredientSpecs = {
  "וודקה": null,
  "ג'ין": null,
  "רום": ["לבן", "גולד", "כהה", "ספייס"],
  "טקילה": ["סילבר", "גולד", "אנייחו", "רפוסדו"],
  "וויסקי": ["בורבון", "סקוטש", "אירי", "קנדי"],
  "ליקר": ["טריפל סק", "קלואה/קפה", "אמרטו", "ביילי'ס", "פרנג'ליקו", "קמבוזיה"],
  "ורמוט": ["ביאנקו (לבן)", "רוסו (אדום)", "דריי (יבש)"],
  "מיץ לימון": null,
  "מיץ ליים": null,
  "מיץ חמוציות": null,
  "מיץ תפוזים": null,
  "סודה": null,
  "טוניק": null,
  "סירופ פשוט": null,
  "סירופ אגבה": null,
  "סוכר חום/סירופ": null,
  "נענה טריה": null,
  "ליים": null,
  "אספרסו": null,
  "חלבון ביצה": null,
  "קמפרי": null,
  "אפרול": null
};

// ============================================
// GLASS TYPES - Add new glass types here
// ============================================
export const glassTypes = [
  "היי בול",
  "לואו בול",
  "מרטיני/קופה",
  "מרגריטה/קופה",
  "שוט",
  "כוס וויסקי"
];

// ============================================
// METHOD OPTIONS - Add new preparation methods here
// ============================================
export const methodOptions = [
  "שייקר - שייק עם קרח ומיין",
  "בילד - בנה ישירות בכוס עם קרח",
  "מדל - מעך רכיבים בתחתית הכוס",
  "סטיר - ערבב עם קרח בכוס ערבוב",
  "בלנד - שייך עם קרח בבלנדר"
];

// ============================================
// GARNISH OPTIONS - Add new garnish types here
// ============================================
export const garnishOptions = [
  "ללא עיטור",
  "פרוסת לימון",
  "פרוסת ליים",
  "קליפת לימון",
  "קליפת תפוז",
  "קליפת ליים",
  "ענף נענה",
  "ענף נענה ופרוסת ליים",
  "דובדבן מראשינו",
  "פרוסת לימון ודובדבן מראשינו",
  "זיתים",
  "פרוסת תפוז",
  "מלח על השפה",
  "מלח על השפה ופרוסת ליים",
  "סוכר על השפה",
  "3 פולי קפה",
  "פרי עונתי"
];
