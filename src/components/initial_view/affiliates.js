import { allItems } from "../all_items";

let affiliateValues = ['Breaded porkchop', 'Beef patty', 'Chicken patty', 'Chaofan', 'Steamed siomai', 'Fried siomai', 'Shanghai', 'Fries', 'Spaghetti', 'Carbonara', 'Palabok', 'Bihon' ]

function getAffiliates() {
  return affiliateValues.map(affiliate => {
    let variantCollection = [];
    
    function checkAffiliatesInStorage(variantCollection) {
      for (let variant of variantCollection) {
        variant = `${variant.item}${variant.variant}`
        
        if (!localStorage.getItem(variant)) {
              return true;
          }
      }
  
      return false;
    }
  
    allItems.forEach(item => {
      Object.entries(item.variants).forEach(([variantName, variantDetails]) => {
        if (variantDetails.affiliate?.includes(affiliate)) {
          variantCollection.push({ item: item.name, variant: variantName });
        }
      });
    });
  
    return {
      affiliate,
      affiliatedVariants: variantCollection,
      checked: checkAffiliatesInStorage(variantCollection)
    };
  });
}

function toggleAffiliates(variants, checked, closedAffiliates) {
  for (let variant of variants) {
    const itemName = variant.item;
    const variantName = variant.variant;
    const itemVariant = `${itemName}${variantName}`;
    
    const hasClosedAffiliate = (() => {
      const item = allItems.find(item => item.name === itemName);
      return item?.variants?.[variantName]?.affiliate?.some(affiliate => closedAffiliates.includes(affiliate)) || false;
    })();

    if (checked) {
      localStorage.setItem(itemVariant, 'unavailable');
    } else {
      if (hasClosedAffiliate) continue;
      localStorage.removeItem(itemVariant);
    }
  }
  
  window.dispatchEvent(new Event("updatedAffiliates"));
}

function collectClosedAffiliates(currentAffiliate) {
  let unchecked = []

  getAffiliates().forEach(affiliate => {
    if ((affiliate.affiliate != currentAffiliate) && !affiliate.checked) unchecked.push(affiliate.affiliate)
  })

  return unchecked
}

export {
  toggleAffiliates,
  collectClosedAffiliates,
  getAffiliates
}
