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
    name: "Singapore Sling",
    method: "שייקר",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1.5" },
      { item: "ליקר", specification: "דובדבנים", amount: "0.5" },
      { item: "טריפל סק", specification: null, amount:  "0.25" },
      { item: "מיץ לימון", specification: null, amount: "0.75"},
      { item: "מיץ אננס", specification: null, amount: "1" },
      { item: "גרנדין", specification: null, amount: "0.25" },

    ],
    garnish: "פלח תפוז",
    glass: "היי בול"
  },
  {
    id: 2,
    name: "Painkiller",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ אננס", specification: null, amount: "1.5" },
      { item: "מיץ תפוזים", specification: null, amount:  "1" },
      { item: "מיץ לימון", specification: null, amount: "0.75"},
      { item: "סירופ קוקוס", specification: null, amount: "0.25" },

    ],
    garnish: "פלח תפוז",
    glass: "היי בול"
  },
  {
    id: 3,
    name: "Planters Punch",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ אננס", specification: null, amount: "1" },
      { item: "מיץ תפוזים", specification: null, amount:  "1" },
      { item: "מיץ לימון", specification: null, amount: "0.5"},
      { item: "גרנדין", specification: null, amount: "0.25" },

    ],
    garnish: "פלח תפוז",
    glass: "היי בול"
  },
  {
    id: 4,
    name: "Hurricane",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ תפוזים", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount:  "0.5" },
      { item: "סירופ פסיפלורה", specification: null, amount: "0.25"},
      { item: "גרנדין", specification: null, amount: "0.25" },

    ],
    garnish: "פלח לימון",
    glass: "כוס קוקטיילים"
  },
  {
    id: 5,
    name: "Sex on the Beach",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "ליקר אפרסק", specification: null, amount: "0.75" },
      { item: "מיץ תפוזים", specification: null, amount:  "1" },
      { item: "מיץ חמוציות", specification: null, amount: "1"},

    ],
    garnish: "פלח לימון",
    glass: "היי בול"
  },
  {
    id: 6,
    name: "Mai Tai",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "טריפל סק", specification: null, amount: "0.5" },
      { item: "סירופ שקדים", specification: null, amount:  "0.25" },
      { item: "מיץ לימון", specification: null, amount: "0.75"},

    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },

  {
    id: 7,
    name: "Pina Colada",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ אננס", specification: null, amount: "2" },
      { item: "סירופ קוקוס", specification: null, amount: "0.25" },

    ],
    garnish: "פלח תפוז",
    glass: "כוס קוקטיילים"
  },
  {
    id: 8,
    name: "Lychee Martini",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "ליקר", specification: "ליצ'י", amount: "0.75" },
      { item: "טריפל סק", specification: null, amount:  "0.25" },
      { item: "מיץ לימון", specification: null, amount: "0.75"},

    ],
    garnish: "פלח לימון",
    glass: "קופ/מרטיני"
  },
  {
    id: 9,
    name: "Apple Martini",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "ליקר", specification: "תפוח", amount: "0.75" },
      { item: "ליקר", specification: "מלון", amount:  "0.25" },
      { item: "מיץ לימון", specification: null, amount: "0.75"},

    ],
    garnish: "פלח לימון",
    glass: "קופ/מרטיני"
  },
  {
    id: 10,
    name: "Lemon Drop",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "טריפל סק", specification: null, amount: "0.5" },
      { item: "מיץ לימון", specification: null, amount: "1" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "מרטיני/קופ"
  },
  {
    id: 11,
    name: "Cosmopolitan",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "טריפל סק", specification: null, amount: "0.5" },
      { item: "מיץ לימון", specification: null, amount: "0.25" },
      { item: "מיץ חמוציות", specification: null, amount: "1" },
    ],
    garnish: "פלח לימון",
    glass: "מרטיני/קופ"
  },
  {
    id: 12,
    name: "Whiskey Sour",
    method: "שייקר",
    ingredients: [
      { item: "וויסקי", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "1" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
      { item: "חלבון להקצפה", specification: null, amount: "1" },
    ],
    garnish: "פלח תפוז",
    glass: "לואו בול"
  },
  {
    id: 13,
    name: "Fitzgerald",
    method: "שייקר",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "1" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
      { item: "ביטרס", specification: null, amount: "2" },
    ],
    garnish: "פלח לימון",
    glass: "קופ"
  },
  {
    id: 14,
    name: "White Lady",
    method: "שייקר",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1.5" },
      { item: "טריפל סק", specification: null, amount: "0.75" },
      { item: "מיץ לימון", specification: null, amount: "1" },
      { item: "חלבון להקצפה", specification: null, amount: "1" },
    ],
    garnish: "פלח לימון",
    glass: "מרטיני/קופ"
  },
  {
    id: 15,
    name: "Daiquiri",
    method: "שייקר",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
    ],
    garnish: "פלח לימון",
    glass: "מרטיני/קופ"
  },
  {
    id: 16,
    name: "Gimlet",
    method: "שייקר",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
    ],
    garnish: "פלח לימון",
    glass: "מרטיני/קופ"
  },
  {
    id: 17,
    name: "Margarita",
    method: "שייקר",
    ingredients: [
      { item: "טקילה", specification: null, amount: "1.5" },
      { item: "טריפל סק", specification: null, amount: "0.75" },
      { item: "מיץ לימון", specification: null, amount: "1" },
    ],
    garnish: "פלח לימון",
    glass: "מרגריטה/קופ"
  },
  {
    id: 18,
    name: "Lychee Sour",
    method: "שייקר",
    ingredients: [
      { item: "ליקר", specification: "ליצ'י", amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },
  {
    id: 19,
    name: "Melon Sour",
    method: "שייקר",
    ingredients: [
      { item: "ליקר", specification: "מלון", amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },
  {
    id: 20,
    name: "Peach Sour",
    method: "שייקר",
    ingredients: [
      { item: "ליקר", specification: "אפרסק", amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },
  {
    id: 21,
    name: "Apple Sour",
    method: "שייקר",
    ingredients: [
      { item: "ליקר", specification: "תפוח", amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },
  {
    id: 22,
    name: "Vodka Sour",
    method: "שייקר",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "1" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
    ],
    garnish: "פלח תפוז",
    glass: "לואו בול"
  },
  {
    id: 23,
    name: "Cherry Sour",
    method: "שייקר",
    ingredients: [
      { item: "ליקר", specification: "דובדבנים", amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.25" },
    ],
    garnish: "פלח לימון",
    glass: "לואו בול"
  },
  {
    id: 24,
    name: "Sea Breeze",
    method: "בנייה",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "מיץ חמוציות", specification: null, amount: "השלמה" },
      { item: "מיץ אשכוליות", specification: null, amount: "השלמה" },
    ],
    garnish: "פלח לימון",
    glass: "היי בול"
  },
  {
    id: 25,
    name: "Madras",
    method: "בנייה",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "מיץ תפוזים", specification: null, amount: "השלמה" },
      { item: "מיץ חמוציות", specification: null, amount: "השלמה" },
    ],
    garnish: "פלח תפוז",
    glass: "היי בול"
  },
  {
    id: 26,
    name: "Tom Collins",
    method: "בנייה",
    ingredients: [
      { item: "ג'ין", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.75" },
      { item: "מי סוכר", specification: null, amount: "0.75" },
      { item: "סודה", specification: null, amount: "השלמה" },
    ],
    garnish: "פלח לימון",
    glass: "היי בול"
  },
  {
    id: 27,
    name: "Bay Breeze",
    method: "בנייה",
    ingredients: [
      { item: "וודקה", specification: null, amount: "1.5" },
      { item: "מיץ אננס", specification: null, amount: "השלמה" },
      { item: "מיץ חמוציות", specification: null, amount: "השלמה" },
    ],
    garnish: "פלח תפוז",
    glass: "היי בול"
  },
  {
    id: 28,
    name: "Cuba Libra",
    method: "בנייה",
    ingredients: [
      { item: "רום", specification: null, amount: "1.5" },
      { item: "מיץ לימון", specification: null, amount: "0.25" },
      { item: "קולה", specification: null, amount: "השלמה" },
    ],
    garnish: "פלח לימון",
    glass: "היי בול"
  },
];

// ============================================
// INGREDIENT SPECIFICATIONS
// ============================================
// Add new ingredients here. Set to null if no specification needed.
// Set to array of options if the ingredient requires specification.
export const ingredientSpecs = {
  "וודקה": null,
  "ג'ין": null,
  "רום": null,
  "טקילה": null,
  "וויסקי": null,
  "טריפל סק": null,
  "ליקר": ["מלון", "תפוח", "אפרסק", "ליצ'י",  "דובדבנים"],
  "ורמוט": ["אדום", "יבש"],
  "מיץ לימון": null,
  "מיץ אננס": null,
  "מי סוכר": null,
  "סירופ": ["קוקוס", "פסיפלורה", "שקדים"],
  "גרנדין": null,
  "מיץ חמוציות": null,
  "מיץ תפוזים": null,
  "מיץ אשכוליות": null,
  "טוניק": null,
  "סודה": null,
  "קולה": null,
  "חלבון להקצפה": null,
  "ביטרס": null
};

// ============================================
// GLASS TYPES - Add new glass types here
// ============================================
export const glassTypes = [
  "היי בול",
  "לואו בול",
  "מרטיני",
  "קופ",
  "כוס קוקטיילים",
  "מרגריטה"
];

// ============================================
// METHOD OPTIONS - Add new preparation methods here
// ============================================
export const methodOptions = [
  "שייקר",
  "בנייה",
  "ערבוב"
];

// ============================================
// GARNISH OPTIONS - Add new garnish types here
// ============================================
export const garnishOptions = [
  "פלח לימון",
  "פלח תפוז",
  "קליפת לימון",
  "קליפת תפוז",
];
