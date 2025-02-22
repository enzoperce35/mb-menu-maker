import { allItems } from "./all_items";

// simultaneously close or open variants under one parent item
function updateItemVariants(itemId, checked) {
  let item = allItems.find(i => i.name === itemId)

  Object.keys(item.variants).map(variant => {
    const variantId = `${itemId}${variant}`;

    checked ? localStorage.setItem(variantId, 'unavailable') : localStorage.removeItem(variantId)
  })

  window.dispatchEvent(new Event("localStorageUpdate"));
}

// close single variant
function updateVariants(variantId, checked) {
  checked ? localStorage.setItem(variantId, 'unavailable') : localStorage.removeItem(variantId)

  window.dispatchEvent(new Event("localStorageUpdate"));
}

export {
  updateItemVariants,
  updateVariants,
}
