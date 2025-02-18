export const allItems = [
  // GROUP 1
  { category: 'Rice Meals',
    name: 'Breaded Porkchop w/ Rice and Veggies',
    group: 1,
    variants: { 'Breaded Porkchop w/ Rice and Veggies': {code: 'M1', price: 100} }},

  { category: 'Rice Meals',
    name: 'Burger Steak in Mushroom Sauce w/ Rice',
    group: 1,
    variants: { 'Burger Steak in Mushroom Sauce w/ Rice': {code: 'M2', price: 100} }},

  { category: 'Rice Meals',
    name: 'Chaofan',
    group: 1,
    variants: {
      Solo: {code: 'F1', price: 60},
      'w/ 4pcs Steamed Siomai': {code: 'F2', price: 90},
      'w/ 4pcs Fried Siomai': {code: 'F3', price: 90},
      'w/ Breaded Porkchop': {code: 'F4', price: 100},
      'w/ 4pcs Shanghai': {code: 'F5', price: 90} }},

  { category: 'Rice Meals',
    name: 'Rice Bowl',
    group: 1,
    variants: {
      'w/ 5pcs Shanghai': {code: 'R1', price: 55},
      'w/ 5pcs Steamed Siomai': {code: 'R2', price: 60},
      'w/ 5pcs Fried Siomai': {code: 'R3', price: 60} }},

  { category: 'Rice Meals',
    name: 'Rice Meals',
    group: 1,
    variants: {
      Tapsilog: {code: '', price: 90},
      Porksilog: {code: '', price: 90},
      Cornsilog: {code: '', price: 80},
      Malingsilog: {code: '',price: 70},
      Hotsilog: {code: '',price: 70} }},

  // A LA CARTE
  { category: 'Ala Carte',
    name: 'Breaded Porkchop w/ BBQ sauce',
    group: 1,
    variants: { 'Breaded Porkchop w/ BBQ sauce': {code: 'A1', price: 70} }},

  { category: 'Ala Carte',
    name: 'Burger Steak In Mushroom Sauce',
    group: 1,
    variants: { 'Burger Steak In Mushroom Sauce': {code: 'A2', price: 80} }},

  { category: 'Ala Carte',
    name: 'Shanghai',
    group: 1,
    variants: {
      '12pcs': {code: '', price: 85},
      '24pcs': {code: '', price: 170},
      '36pcs': {code: '', price: 250} }},

  { category: 'Ala Carte',
    name: 'Chicken Fillet',
    group: 1,
    variants: { regular: {code: '', price: 90}, large: {code: '', price: 135} }},

  { category: 'Ala Carte',
    name: 'Chicken Wings',
    group: 1,
    variants: {
      '6pcs Honey Soy Garlic': {code: '', price: 145},
      '6pcs Buffalo': {code: '', price: 145},
      '6pcs Orange': {code: '', price: 145},
      '6pcs Assorted': {code: '', price: 145},
      '10pcs Honey Soy Garlic': {code: '', price: 235},
      '10pcs Buffalo': {code: '', price: 235},
      '10pcs Orange': {code: '', price: 235},
      '10pcs Assorted': {code: '', price: 235},
      '20pcs Honey Soy Garlic': {code: '', price: 450},
      '20pcs Buffalo': {code: '', price: 450},
      '20pcs Orange': {code: '', price: 450},
      '20pcs Assorted': {code: '', price: 450} }},

  { category: 'Ala Carte',
    name: 'Chicken Pop Shots',
    group: 1,
    variants: { regular: {code: '', price: 80},  spicy: {code: '', price: 80} }},

  { category: 'Extra',
    name: 'Extra',
    group: 1,
    variants: {
      'Plain Rice': {price: 15},
      'Fried Rice': {price: 20},
      'gravy sauce': {price: 20},
      'gravy mushroom sauce': {price: 20},
      'bbq sauce': {price: 20},
      'honey soy garlic sauce': {price: 20},
      'buffalo sauce': {price: 20},
      'orange sauce': {price: 20} }},

  { category: 'Add-Ons',
        name: 'Add-Ons',
        group: 1,
        variants: {
          'Fried Egg': {price: 15},
          Veggies: {price: 20} }},

  // GROUP 2
  { category: 'Burger',
    name: 'Beef Burger',
    group: 2,
    variants: {
      Solo: {code: 'B1', price: 55},
      'w/ Fries': {code: 'B2',price: 75},
      'w/ Spaghetti': {code: 'B3', price: 90},
      'w/ Carbonara': {code: 'B4',price: 90},
      'w/ Palabok': {code: 'B5',price: 90} }},

  { category: 'Burger',
    name: 'Chicken Burger',
    group: 2,
    variants: {
      Solo: {code: 'C1', price: 55},
      'w/ Fries': {code: 'C2', price: 75},
      'w/ Spaghetti': {code: 'C3', price: 90},
      'w/ Carbonara': {code: 'C4', price: 90},
      'w/ Palabok': {code: 'C5', price: 90} }},

  { category: 'Fries',
    name: 'Salt',
    group: 2,
    variants: {
      'regular': {code: '', price: 35},
      'large': {code: '', price: 60},
      'w/ Iced Tea': {code: 'J1', price: 50},
      'w/ Orange Juice': {code: 'J2', price: 50} }},

  { category: 'Fries',
    name: 'Cheese',
    group: 2,
    variants: {
      'regular': {code: '', price: 40},
      'large': {code: '', price: 65},
      'w/ Iced Tea': {code: 'J3', price: 50},
      'w/ Orange Juice': {code: 'J4', price: 50} }},

  { category: 'Fries',
    name: 'BBQ',
    group: 2,
    variants: {
      'regular': {code: '', price: 40},
      'large': {code: '', price: 65},
      'w/ Iced Tea': {code: 'J5', price: 50},
      'w/ Orange Juice': {code: 'J6', price: 50} }},

  { category: 'Fries',
    name: 'Sour Cream',
    group: 2,
    variants: {
      'regular': {code: '', price: 40},
      'large': {code: '', price: 65},
      'w/ Iced Tea': {code: 'J7', price: 50},
      'w/ Orange Juice': {code: 'J8', price: 50} }},

  { category: 'Siomai',
    name: 'Steamed',
    group: 2,
    variants: { '6pcs': {price: 45}, '8pcs': {price: 60}, 'tub regular': {price: 100}, 'tub spicy': {price: 100} }},

  { category: 'Siomai',
    name: 'Fried',
    group: 2,
    variants: { '6pcs': {price: 50}, '8pcs': {price: 65} }},

  { category: 'Empanada',
    name: 'Empanada',
    group: 2,
    variants: { '5pcs': {price: 100},  '10pcs': {price: 190} }},

  { category: 'Maruya',
    name: 'Maruya',
    group: 2,
    variants: { regular: {price: 50}, bites: {price: 120} }},

  { category: 'Extra',
    name: 'Extra',
    group: 2,
    variants: {
      'Salted Fries (60g)': {price: 25},
      coleslaw: {price: 20} }},

  //GROUP 3
  { category: 'Pasta',
    name: 'Palabok',
    group: 3,
    variants: { Solo: {price: 65}, 'w/ 2pcs puto': {price: 75} }},

  { category: 'Pasta',
    name: 'Spaghetti',
    group: 3,
    variants: { Solo: {price: 65}, 'w/ 2pcs puto': {price: 75} }},

  { category: 'Pasta',
    name: 'Carbonara',
    group: 3,
    variants: { Solo: {price: 65}, 'w/ 2pcs puto': {price: 75} }},

  { category: 'Pasta',
    name: 'Pansit Bihon',
    group: 3,
    variants: { Solo: {price: 65}, 'w/ 2pcs puto': {price: 75} }},

  { category: 'Milk Shake',
    name: 'Milk Shake',
    group: 3,
    variants: {
      chocolate: {price: 50},
      mango: {price: 50},
      strawberry: {price: 50},
      'coffee crumble': {price: 50},
      'cookies and cream': {price: 50} }},

  { category: 'PreOrder Bilao',
    name: 'Palabok',
    group: 3,
    variants: {
      'Small': {price: 350},
      'Medium': {price: 500},
      'Large': {price: 750},
      'XL': {price: 850} }},

  { category: 'PreOrder Bilao',
    name: 'Spaghetti',
    group: 3,
    variants: {
      'Small': {price: 350},
      'Medium': {price: 500},
      'Large': {price: 750},
      'XL': {price: 850} }},

  { category: 'PreOrder Bilao',
    name: 'Carbonara',
    group: 3,
    variants: {
      'Small': {price: 350},
      'Medium': {price: 500},
      'Large': {price: 750},
      'XL': {price: 850} }},

  { category: 'PreOrder Bilao',
    name: 'Pansit Bihon',
    group: 3,
    variants: {
      'Small': {price: 350},
      'Medium': {price: 500},
      'Large': {price: 750},
      'XL': {price: 850} }},

  { category: 'Beverages',
    name: 'Beverages',
    group: 3,
    variants: {
      'Bottled Water 350ml': {price: 10},
      'Coke Mismo': {price: 20},
      'Mountain Dew 295ml': {price: 20},
      'Black Gulaman 750ml': {price: 60},
      'Iced Tea 750ml': {price: 60},
      'Orange Juice 750ml': {price: 60} }},

  { category: 'Add-Ons',
    name: 'Add-Ons',
    group: 3,
    variants: {
    'Garlic Bread': {price: 15},
    'Shake Toppings': {price: 5},
    'Shake Syrup': {price: 5},
    'Shake Pearl': {price: 10} }}
]
