const affiliates = ['Breaded porkchop', 'Beef patty', 'Chicken patty', 'Chaofan', 'Steamed siomai', 'Fried siomai', 'Shanghai', 'Fries', 'Spaghetti', 'Carbonara', 'Palabok', 'Bihon' ]

export const allItems = [
  // GROUP 1
  { category: 'Rice Meals',
    name: 'Breaded Porkchop w/ Rice and Veggies',
    group: 1,
    variants: { 'Breaded Porkchop w/ Rice and Veggies': {code: 'M1', price: 100, affiliate: ['Breaded porkchop']} }},

  { category: 'Rice Meals',
    name: 'Burger Steak in Mushroom Sauce w/ Rice',
    group: 1,
    variants: { 'Burger Steak in Mushroom Sauce w/ Rice': {code: 'M2', price: 100, affiliate: ['Beef patty']} }},

  { category: 'Rice Meals',
    name: 'Chaofan',
    group: 1,
    variants: {
      'Solo': {code: 'F1', price: 60, affiliate: ['Chaofan']},
      'w/ 4pcs Steamed Siomai': {code: 'F2', price: 90, affiliate: ['Chaofan', 'Steamed siomai']},
      'w/ 4pcs Fried Siomai': {code: 'F3', price: 90, affiliate: ['Chaofan', 'Fried siomai']},
      'w/ Breaded Porkchop': {code: 'F4', price: 100, affiliate: ['Chaofan', 'Breaded porkchop']},
      'w/ 4pcs Shanghai': {code: 'F5', price: 90, affiliate: ['Chaofan', 'Shanghai']} }},

  { category: 'Rice Meals',
    name: 'Rice Bowl',
    group: 1,
    variants: {
      'w/ 5pcs Shanghai': {code: 'R1', price: 55, affiliate: ['Shanghai']},
      'w/ 5pcs Steamed Siomai': {code: 'R2', price: 60, affiliate: ['Steamed siomai']},
      'w/ 5pcs Fried Siomai': {code: 'R3', price: 60, affiliate: ['Fried siomai']} }},

  { category: 'Rice Meals',
    name: 'Silog',
    group: 1,
    variants: {
      Tapsilog: {code: '', price: 90},
      Porksilog: {code: '', price: 90, affiliate: ['Breaded porkchop']},
      Cornsilog: {code: '', price: 80},
      Malingsilog: {code: '',price: 70},
      Hotsilog: {code: '',price: 70} }},

  // A LA CARTE
  { category: 'Ala Carte',
    name: 'Breaded Porkchop w/ BBQ sauce',
    group: 1,
    variants: { 'Breaded Porkchop w/ BBQ sauce': {code: 'A1', price: 70, affiliate: ['Breaded porkchop']} }},

  { category: 'Ala Carte',
    name: 'Burger Steak In Mushroom Sauce',
    group: 1,
    variants: { 'Burger Steak In Mushroom Sauce': {code: 'A2', price: 80, affiliate: ['Beef patty']} }},

  { category: 'Ala Carte',
    name: 'Shanghai',
    group: 1,
    variants: {
      '12pcs': {code: '', price: 85, affiliate: ['Shanghai']},
      '24pcs': {code: '', price: 170, affiliate: ['Shanghai']},
      '36pcs': {code: '', price: 250, affiliate: ['Shanghai']} }},

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
  { category: 'Pasta',
    name: 'Pasta',
    group: 2,
    variants: {
      'Palabok Solo': {price: 65, affiliate: ['Palabok']},
      'Palabok w/ 2pcs puto': {price: 75, affiliate: ['Palabok', 'Puto']},
      'Spaghetti Solo': {price: 65, affiliate: ['Spaghetti']},
      'Spaghetti w/ 2pcs puto': {price: 75, affiliate: ['Spaghetti', 'Puto']},
      'Carbonara Solo': {price: 65, affiliate: ['Carbonara']},
      'Carbonara w/ 2pcs puto': {price: 75, affiliate: ['Carbonara', 'Puto']},
      'Pansit Bihon Solo': {price: 65, affiliate: ['Bihon']},
      'Pansit Bihon w/ 2pcs puto': {price: 75, affiliate: ['Bihon', 'Puto']} }},

  { category: 'Burger',
    name: 'Burger',
    group: 2,
    variants: {
      'Beef Burger Solo': {code: 'B1', price: 55, affiliate: ['Beef patty']},
      'Beef Burger w/ Fries': {code: 'B2', price: 75, affiliate: ['Beef patty', 'Fries']},
      'Beef Burger w/ Spaghetti': {code: 'B3', price: 90, affiliate: ['Beef patty', 'Spaghetti']},
      'Beef Burger w/ Carbonara': {code: 'B4',price: 90, affiliate: ['Beef patty', 'Carbonara']},
      'Beef Burger w/ Palabok': {code: 'B5',price: 90, affiliate: ['Beef patty', 'Palabok']},
      'Chicken Burger Solo': {code: 'B1', price: 55, affiliate: ['Chicken patty']},
      'Chicken Burger w/ Fries': {code: 'B2', price: 75, affiliate: ['Chicken patty', 'Fries']},
      'Chicken Burger w/ Spaghetti': {code: 'B3', price: 90, affiliate: ['Chicken patty', 'Spaghetti']},
      'Chicken Burger w/ Carbonara': {code: 'B4',price: 90, affiliate: ['Chicken patty', 'Carbonara']},
      'Chicken Burger w/ Palabok': {code: 'B5',price: 90, affiliate: ['Chicken patty', 'Palabok']} }},

  { category: 'Fries',
    name: 'Fries',
    group: 2,
    variants: {
      'Salt regular': {code: '', price: 35, affiliate: ['Fries']},
      'Salt large': {code: '', price: 60, affiliate: ['Fries']},
      'Salt w/ Iced Tea': {code: 'J1', price: 50, affiliate: ['Fries']},
      'Salt w/ Orange Juice': {code: 'J2', price: 50, affiliate: ['Fries']},
      'Cheese regular': {code: '', price: 40, affiliate: ['Fries']},
      'Cheese large': {code: '', price: 65, affiliate: ['Fries']},
      'Cheese w/ Iced Tea': {code: 'J3', price: 50, affiliate: ['Fries']},
      'Cheese w/ Orange Juice': {code: 'J4', price: 50, affiliate: ['Fries']},
      'BBQ regular': {code: '', price: 40, affiliate: ['Fries']},
      'BBQ large': {code: '', price: 65, affiliate: ['Fries']},
      'BBQ w/ Iced Tea': {code: 'J5', price: 50, affiliate: ['Fries']},
      'BBQ w/ Orange Juice': {code: 'J6', price: 50, affiliate: ['Fries']},
      'Sour Cream regular': {code: '', price: 40, affiliate: ['Fries']},
      'Sour Cream large': {code: '', price: 65, affiliate: ['Fries']},
      'Sour Cream w/ Iced Tea': {code: 'J7', price: 50, affiliate: ['Fries']},
      'Sour Cream w/ Orange Juice': {code: 'J8', price: 50, affiliate: ['Fries']} }},

  { category: 'Siomai',
    name: 'Siomai',
    group: 2,
    variants: {
      'Steamed 6pcs': {price: 45, affiliate: ['Steamed siomai']},
      'Steamed 8pcs': {price: 60, affiliate: ['Steamed siomai']},
      'Steamed tub regular': {price: 100, affiliate: ['Steamed siomai']},
      'Steamed tub spicy': {price: 100, affiliate: ['Steamed siomai']},
      'Fried 6pcs': {price: 45, affiliate: ['Fried siomai']},
      'Fried 8pcs': {price: 60, affiliate: ['Fried siomai']} }},

  { category: 'Empanada',
    name: 'Empanada',
    group: 2,
    variants: { '5pcs': {price: 100},  '10pcs': {price: 190} }},

  { category: 'Maruya',
    name: 'Maruya',
    group: 2,
    variants: { regular: {price: 50}, bites: {price: 120} }},

  { category: 'Beverages',
    name: 'Beverages',
    group: 2,
    variants: {
      'Bottled Water 350ml': {price: 10},
      'Coke Mismo': {price: 20},
      'Mountain Dew 295ml': {price: 20},
      'Black Gulaman 750ml': {price: 60},
      'Iced Tea 750ml': {price: 60},
      'Orange Juice 750ml': {price: 60} }},

  { category: 'Extra',
    name: 'Extra',
    group: 2,
    variants: {
      'Salted Fries (60g)': {price: 25, affiliate: ['Fries']},
      coleslaw: {price: 20} }},
  
  //{ category: 'Milk Shake',
  //  name: 'Milk Shake',
  //  group: 2,
  //  variants: {
  //    'chocolate': {price: 50},
  //    'mango': {price: 50},
  //    'strawberry': {price: 50},
  //    'coffee crumble': {price: 50},
  //    'cookies and cream': {price: 50} }},


  //GROUP 3
  //{ category: 'PreOrder Bilao',
  //  name: 'Palabok',
  //  group: 3,
  //  variants: {
  //    'Small': {price: 350},
  //    'Medium': {price: 500},
  //    'Large': {price: 750},
  //    'XL': {price: 850} }},
//
  //{ category: 'PreOrder Bilao',
  //  name: 'Spaghetti',
  //  group: 3,
  //  variants: {
  //    'Small': {price: 350},
  //    'Medium': {price: 500},
  //    'Large': {price: 750},
  //    'XL': {price: 850} }},
//
  //{ category: 'PreOrder Bilao',
  //  name: 'Carbonara',
  //  group: 3,
  //  variants: {
  //    'Small': {price: 350},
  //    'Medium': {price: 500},
  //    'Large': {price: 750},
  //    'XL': {price: 850} }},
//
  //{ category: 'PreOrder Bilao',
  //  name: 'Pansit Bihon',
  //  group: 3,
  //  variants: {
  //    'Small': {price: 350},
  //    'Medium': {price: 500},
  //    'Large': {price: 750},
  //    'XL': {price: 850} }},
]
