export const allItems = [
  // RICE MEALS
  { category: 'Rice Meals',
    name: 'Chaofan',
    group: 1,
    variants: {
      solo: {price: 60},
      'w/ Shanghai': {price: 85},
      'w/ Steamed Siomai': {price: 85},
      'w/ Fried Siomai': {price: 85} }},

  { category: 'Rice Meals',
    name: 'Rice Bowl',
    group: 1,
    variants: { siomai: {price: 60}, shanghai: {price: 60} }},

  { category: 'Rice Meals',
    name: 'Breaded Porkchop w/ Rice and Veggies',
    group: 1,
    variants: { 'Breaded Porkchop w/ Rice and Veggies': {code: 'R1', price: 85} }},

  { category: 'Rice Meals',
    name: 'Burger Steak in Mushroom Sauce w/ Rice',
    group: 1,
    variants: { 'Burger Steak in Mushroom Sauce w/ Rice': {price: 100} }},

  { category: 'Rice Meals',
    name: 'Silog',
    group: 1,
    variants: { Tapsilog: {price: 85} }, Porksilog: {price: 85}, Chixilog: {price: 85}, Malingsilog: {price: 70}, MHotsilog: {price: 70} },

  // A LA CARTE
  { category: 'Ala Carte',
    name: 'Chicken Fillet',
    group: 1,
    variants: { regular: {code: 'CF1', price: 90}, large: {code: 'CF2', price: 135} }},

  { category: 'Ala Carte',
    name: 'Chicken Wings',
    group: 1,
    variants: { '4pcs': {code: 'CW4', price: 90}, '6pcs': {code: 'CW6', price: 135} }, '10pcs': {code: 'CW10', price: 220}, '20pcs': {code: 'CW20', price:425}},

  { category: 'Ala Carte',
    name: 'Chicken Pop Shots',
    group: 1,
    variants: { regular: {price: 80},  spicy: {price: 85} }},

  { category: 'Ala Carte',
    name: 'Breaded Porkchop w/ BBQ sauce',
    group: 1,
    variants: { 'Breaded Porkchop w/ BBQ sauce': {price: 70} }},

  { category: 'Ala Carte',
    name: '5pcs Pork Shanghai',
    group: 1,
    variants: { '5pcs Pork Shanghai': {price: 55} }},

  { category: 'Ala Carte',
    name: 'Burger Steak In Mushroom Sauce',
    group: 1,
    variants: { 'Burger Steak In Mushroom Sauce': {price: 80} }},

  // MERIENDA
  { category: 'Merienda',
    name: 'Beef Burger',
    group: 2,
    variants: { solo: { price: 50}, 'w/ Fries': {price: 70}, 'w/ Pasta': {price: 85} }},

  { category: 'Merienda',
    name: 'Chicken Burger',
    group: 2,
    variants: { solo: { price: 60}, chicken: {price: 80}, 'w/ Pasta': {price: 95} }},

  { category: 'Merienda',
    name: 'Fries',
    group: 2,
    variants: {
      'regular salt': {code: 'RS', price: 35},
      'regular cheese': {code: 'RC', price: 40},
      'regular bbq': {code: 'RB', price: 40},
      'regular sour & cream': {code: 'RSC', price: 40},
      'large salt': {code: 'LS', price: 60},
      'large cheese': {code: 'LC', price: 65},
      'large bbq': {code: 'LB', price: 65},
      'large sour & cream': {code: 'LSC', price: 65}}},

  { category: 'Merienda',
    name: 'Siomai',
    group: 2,
    variants: { '4pcs': {price: 30}, '6pcs': {price: 45}, '8pcs': {price: 60}, tub: {price: 100} }},

  { category: 'Merienda',
    name: 'Empanada',
    group: 2,
    variants: { '5pcs': {price: 100},  '10pcs': {price: 190} }},

  { category: 'Merienda',
    name: 'Maruya',
    group: 2,
    variants: { regular: {price: 50}, bites: {price: 120} }},

  { category: 'Merienda',
    name: 'Garlic Bread',
    group: 2,
    variants: { 'Garlic Bread': {price: 10} }},

  { category: 'Merienda',
    name: 'Milk Shake',
    group: 2,
    variants: { chocolate: {code: 'MS-Choco', price: 50}, mango: {code: 'MS-Mango', price: 50}, strawberry: {code: 'MS-Berry', price: 50}, 'cookies and cream': {code: 'MS-Cream', price: 50} }},

  { category: 'Merienda',
    name: 'Palabok',
    group: 2,
    variants: { solo: {price: 65}, 'w/ Garlic Bread': {price: 75} }},

  { category: 'Merienda',
    name: 'Spaghetti',
    group: 2,
    variants: { solo: {price: 65}, 'w/ Garlic Bread': {price: 75} }},

  { category: 'Merienda',
    name: 'Carbonara',
    group: 2,
    variants: { solo: {price: 65}, 'w/ Garlic Bread': {price: 75} }},

  { category: 'Merienda',
    name: 'Pansit Bihon',
    group: 2,
    variants: { solo: {price: 65}, 'w/ Garlic Bread': {price: 75} }},

  // BEVERAGES
  { category: 'Beverages',
    name: 'Coke Mismo',
    group: 3,
    variants: { 'Coke Mismo': {price: 20} }},

  { category: 'Beverages',
    name: 'Mountain Dew 295ml',
    group: 3,
    variants: { 'Mountain Dew 295ml': {price: 20} }},

  { category: 'Beverages',
    name: '1L Iced Tea',
    group: 3,
    variants: { '1L Iced Tea': {price: 60} }},

  { category: 'Beverages',
    name: '1L Orange Juice',
    group: 3,
    variants: { '1L Orange Juice': {price: 60} }},

  { category: 'Beverages',
    name: '8oz Bottled Water',
    group: 3,
    variants: { '8oz Bottled Water': {price: 10} }},

  // ADD-ONS
  { category: 'Add-Ons',
    name: 'Add-Ons',
    group: 1,
    variants: {
      coleslaw: {price: 20},
      'bbq sauce': {price: 20},
      'honey soy garlic sauce': {price: 20},
      'buffalo sauce': {price: 20},
      'orange sauce': {price: 20},
      veggies: {price: 20} }},

  { category: 'Add-Ons',
    name: 'Fried Egg',
    group: 1,
    variants: { 'Fried Egg': {price: 15} }},

  { category: 'Add-Ons',
    name: 'Plain Rice',
    group: 1,
    variants: { 'Plain Rice': {price: 15} }},

  { category: 'Add-Ons',
    name: 'Fried Rice',
    group: 1,
    variants: { 'Fried Rice': {price: 20} }},
]
