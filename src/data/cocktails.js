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
  "טוניק": null,
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
  "כוס קוקטיילים"
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
