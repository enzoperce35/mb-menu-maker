const lightColors = [
  { "alice-blue": "#F0F8FF" },
  { "baby-blue": "#89CFF0" },
  { "powder-blue": "#B0E0E6" },
  { "ivory": "#FFFFF0" },
  { "beige": "#F5F5DC" },
  { "old-lace": "#FDF5E6" },
  { "seashell": "#FFF5EE" },
  { "cornsilk": "#FFF8DC" },
  { "floral-white": "#FFFAF0" },
  { "ghost-white": "#F8F8FF" },
  { "snow": "#FFFAFA" },
  { "champagne": "#F7E7CE" },
  { "apricot": "#FDD5B1" },
  { "melon": "#FDBCB4" },
  { "wheat": "#F5DEB3" },
  { "blanched-almond": "#FFEBCD" },
  { "pearl": "#EAE0C8" },
  { "pale green": "#98FB98" }
];

export const allItems = [
  // GROUP 1
  { category: 'Meals',
    name: 'Breaded Porkchop',
    display: true,
    color: '#F0FFF0', //honey dew
    group: 1,
    variants: {
      'w/ BBQ sauce': {code: 'A1', price: 70, affiliate: ['Breaded porkchop']},
      'w/ Rice, Veggies & BBQ sauce': {code: 'M1', price: 100, affiliate: ['Breaded porkchop']} }},
      
  { category: 'Meals',
    name: 'Burger Steak',
    display: true,
    color: '#D8BFD8', //thistle
    group: 1,
    variants: {
      'in Mushroom Sauce': {code: 'A2', price: 80, affiliate: ['Beef patty']},
      'in Mushroom Sauce w/ Rice': {code: 'M2', price: 100, affiliate: ['Beef patty']} }},
      
  { category: 'Meals',
    name: 'Chaofan',
    display: true,
    color: '#B0C4DE', //light steel blue
    group: 1,
    variants: {
      'Solo': {code: 'F1', price: 60, affiliate: ['Chaofan']},
      'w/ 4pcs Steamed Siomai': {code: 'F2', price: 90, affiliate: ['Chaofan', 'Steamed siomai']},
      'w/ 4pcs Fried Siomai': {code: 'F3', price: 90, affiliate: ['Chaofan', 'Fried siomai']},
      'w/ Breaded Porkchop': {code: 'F4', price: 100, affiliate: ['Chaofan', 'Breaded porkchop']},
      'w/ 4pcs Shanghai': {code: 'F5', price: 90, affiliate: ['Chaofan', 'Shanghai']} }},

  { category: 'Meals',
    name: 'Rice Bowl',
    display: true,
    color: '#FFE4B5', //moccasin
    group: 1,
    variants: {
      'w/ 5pcs Shanghai': {code: 'R1', price: 55, affiliate: ['Shanghai']},
      'w/ 5pcs Steamed Siomai': {code: 'R2', price: 60, affiliate: ['Steamed siomai']},
      'w/ 5pcs Fried Siomai': {code: 'R3', price: 60, affiliate: ['Fried siomai']} }},

  { category: 'Meals',
    name: 'Silog',
    display: true,
    color: '#DB7093', //pale violet red
    group: 1,
    variants: {
      'Tapsilog': {price: 90},
      'Porksilog': {price: 90, affiliate: ['Breaded porkchop']},
      'Cornsilog': {price: 80},
      'Malingsilog': {price: 70},
      'Hotsilog': {price: 70} }},

  { category: 'Meals',
    name: 'Shanghai',
    display: true,
    color: '#F5FFFA', //mint cream
    group: 1,
    variants: {
      '12pcs': {price: 85, affiliate: ['Shanghai']},
      '24pcs': {price: 170, affiliate: ['Shanghai']},
      '36pcs': {price: 250, affiliate: ['Shanghai']} }},

  { category: 'Meals',
    name: 'Chicken Fillet',
    display: true,
    color: '#ADD8E6', //light blue
    group: 1,
    variants: { regular: {price: 90}, large: {price: 135} }},

  { category: 'Meals',
    name: 'Chicken Wings',
    display: true,
    color: '#FFE4E1', //misty rose
    group: 1,
    variants: {
      '6pcs Honey Soy Garlic': {price: 145},
      '6pcs Buffalo': {price: 145},
      '6pcs Orange': {price: 145},
      '6pcs Assorted': {price: 145},
      '10pcs Honey Soy Garlic': {price: 235},
      '10pcs Buffalo': {price: 235},
      '10pcs Orange': {price: 235},
      '10pcs Assorted': {price: 235},
      '20pcs Honey Soy Garlic': {price: 450},
      '20pcs Buffalo': {price: 450},
      '20pcs Orange': {price: 450},
      '20pcs Assorted': {price: 450} }},

  { category: 'Meals',
    name: 'Chicken Pop Shots',
    display: true,
    color: '#E0FFFF', //light cyan
    group: 1,
    variants: { regular: {price: 80},  spicy: {price: 80} }},

  { category: 'Extra',
    name: 'Extra',
    group: 1,
    color: '#DDA0DD', //plum
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
    color: '#FFB6C1', //light pink
    variants: {
      'Fried Egg': {price: 15},
      'Veggies': {price: 20} }},

  // GROUP 2
  { category: 'Merienda',
    name: 'Beef Burger',
    display: true,
    color: '#FFA07A', //light salmon
    group: 2,
    variants: {
      'Solo': {code: 'B1', price: 55, affiliate: ['Beef patty']},
      'w/ Fries': {code: 'B2', price: 75, affiliate: ['Beef patty', 'Fries']},
      'w/ Spaghetti': {code: 'B3', price: 90, affiliate: ['Beef patty', 'Spaghetti']},
      'w/ Carbonara': {code: 'B4',price: 90, affiliate: ['Beef patty', 'Carbonara']},
      'w/ Palabok': {code: 'B5',price: 90, affiliate: ['Beef patty', 'Palabok']} }},
  
  { category: 'Merienda',
    name: 'Chicken Burger',
    display: true,
    color: '#FFF5EE', //sea shell
    group: 2,
    variants: {
      'Solo': {code: 'C1', price: 55, affiliate: ['Chicken patty']},
      'w/ Fries': {code: 'C2', price: 75, affiliate: ['Chicken patty', 'Fries']},
      'w/ Spaghetti': {code: 'C3', price: 90, affiliate: ['Chicken patty', 'Spaghetti']},
      'w/ Carbonara': {code: 'C4',price: 90, affiliate: ['Chicken patty', 'Carbonara']},
      'w/ Palabok': {code: 'C5',price: 90, affiliate: ['Chicken patty', 'Palabok']} }},

  { category: 'Merienda',
    name: 'Fries',
    display: true,
    color: '#E6E6FA', //lavender
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
  
  { category: 'Merienda',
    name: 'Siomai',
    display: true,
    color: '#ADD8E6', //light blue
    group: 2,
    variants: {
      'Steamed 6pcs': {price: 45, affiliate: ['Steamed siomai']},
      'Steamed 8pcs': {price: 60, affiliate: ['Steamed siomai']},
      'Steamed tub regular': {price: 100, affiliate: ['Steamed siomai']},
      'Steamed tub spicy': {price: 100, affiliate: ['Steamed siomai']},
      'Fried 6pcs': {price: 45, affiliate: ['Fried siomai']},
      'Fried 8pcs': {price: 60, affiliate: ['Fried siomai']} }},
    
    

  { category: 'Merienda',
    name: 'Pansit Bihon',
    display: true,
    group: 2,
    color: '#FFDAB9', //peach puff
    variants: {
      'Solo': {price: 65, affiliate: ['Bihon']},
      'w/ 2pcs puto': {price: 75, affiliate: ['Bihon', 'Puto']} }},

  { category: 'Merienda',
    name: 'Palabok',
    display: true,
    color: '#98FB98', //light green
    group: 2,
    variants: {
      'Solo': {price: 65, affiliate: ['Palabok']},
      'w/ 2pcs puto': {price: 75, affiliate: ['Palabok', 'Puto']} }},

  { category: 'Merienda',
    name: 'Spaghetti',
    display: true,
    color: '#FFF0F5', //lavender blush
    group: 2,
    variants: {
      'Solo': {price: 65, affiliate: ['Spaghetti']},
      'w/ 2pcs puto': {price: 75, affiliate: ['Spaghetti', 'Puto']} }},

  { category: 'Merienda',
    name: 'Carbonara',
    display: true,
    color: '"#FFF5EE', //sea shell
    group: 2,
    variants: {
      'Solo': {price: 65, affiliate: ['Carbonara']},
      'w/ 2pcs puto': {price: 75, affiliate: ['Carbonara', 'Puto']} }},

  { category: 'Merienda',
    name: 'Empanada',
    display: true,
    color: '#FFFACD', //lemon chiffon
    group: 2,
    variants: { '5pcs': {price: 100},  '10pcs': {price: 190} }},

  { category: 'Merienda',
    name: 'Maruya',
    display: true,
    color: '#F0FFFF', //azure
    group: 2,
    variants: { regular: {price: 50}, bites: {price: 120} }},

  { category: 'Merienda',
    name: 'Puto',
    group: 2,
    color: '#E6E6FA', //light lavender
    variants: {
      'Medium': {price: 8, affiliate: ['Puto']},
      'Regular': {price: 13, affiliate: ['Puto']},
      'Regular ube': {price: 15, affiliate: ['Puto']} }},

  { category: 'Beverages',
    name: 'Beverages',
    group: 2,
    color: '#FFDEAD', //navajo white
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
    color: '#FAFAD2', //light goldenrod
    variants: {
      'Salted Fries (60g)': {price: 25, affiliate: ['Fries']},
      'coleslaw': {price: 20} }},
  
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
  { category: 'PreOrder Bilao',
    name: 'Palabok Bilao',
    group: 3,
    variants: {
      'Medium': {price: 500, pax: {max: 10}},
      'Large': {price: 750, pax: {max: 15}},
      'XL': {price: 850, pax: {max: 20}} }},
  
  { category: 'PreOrder Bilao',
    name: 'Carbonara Bilao',
    group: 3,
    variants: {
      'Medium': {price: 550, pax: {max: 10}},
      'Large': {price: 800, pax: {max: 15}},
      'XL': {price: 900, pax: {max: 20}} }},

  { category: 'PreOrder Bilao',
    name: 'Spaghetti Bilao',
    group: 3,
    variants: {
      'Medium': {price: 600, pax: {max: 10}},
      'Large': {price: 850, pax: {max: 15}},
      'XL': {price: 950, pax: {max: 20}} }},

  { category: 'PreOrder Bilao',
    name: 'Pansit Bihon Bilao',
    group: 3,
    variants: {
      'Medium': {price: 600, pax: {max: 10}},
      'Large': {price: 850, pax: {max: 15}},
      'XL': {price: 950, pax: {max: 20}} }},
  
  { category: 'PreOrder Bilao',
    name: 'Puto Bilao',
    group: 3,
    variants: {
      'Small 25pcs': {price: 200, pax: {min: 10, max: 12}},
      'Medium 40pcs': {price: 300, pax: {min: 20, max: 25}},
      'Large 50pcs': {price: 370, pax: {min: 25, max: 30}},
      'XL 75pcs': {price: 520, pax: {min:30, max: 40}} }},
  
  { category: 'PreOrder Bilao',
    name: 'Chicken Fillet Bilao',
    group: 3,
    variants: {
      'Small': {price: 300, pax: {min: 5, max: 7}},
      'Medium': {price: 550, pax: {min: 12, max: 15}},
      'Large': {price: 850, pax: {min: 18, max: 22}},
      'XL': {price: 1100, pax: {min: 25, max: 30}} }},
  
  { category: 'PreOrder Bilao',
    name: 'Chicken Wings Bilao',
    group: 3,
    variants: {
      'Medium 30pcs': {price: 730, pax: {min: 7, max: 10}},
      'Large 40pcs': {price: 900, pax: {min: 10, max: 14}},
      'XL 50pcs': {price: 1100, pax: {min: 13, max: 18}} }},
  
  { category: 'PreOrder Bilao',
    name: 'Siomai Bilao',
    group: 3,
    variants: {
      'Small 30pcs': {price: 250, pax: {min: 6, max: 8}},
      'Medium 50pcs': {price: 400, pax: {min: 10, max: 12}},
      'Large 75pcs': {price: 600, pax: {min: 15, max: 18}},
      'XL 100pcs': {price: 800, pax: {min: 20, max: 25}} }},
]
