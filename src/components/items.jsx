import React, { useState } from "react";
import { allItems } from "./all_items";
import ToggleSwitch from "./store_menu/toggleswitch/toggleswitch";

const getItems = (category) => allItems.filter(item => item.category === category);

export default function Items({category, focus}) {
  const [menu, setMenu] = useState({items: getItems(category), updated: false})

  const updateStorage = (id, available, global) => {
    if (global) {
      let item = allItems.find(i => i.name === id)

      Object.keys(item.variants).map(key => {
        const variantId = `${id}${key}`;

        available ? localStorage.setItem(variantId, 'available') : localStorage.removeItem(variantId)
      })
    } else {
      available ? localStorage.setItem(id, 'available') : localStorage.removeItem(id);
    }

    setMenu({...menu, updated: true});
  }

  const displayItems = menu.items.map((item) => {
    let variants = []
    let itemAvailable = false;

    Object.entries(item.variants).map(variant => {
      const [key, value] = variant;
      const variantId = `${item.name}${key}`;
      const variantIsAvailable = localStorage.getItem(variantId) === null;

      if (variantIsAvailable) itemAvailable = true;
      variants.push({name: key, id: variantId, price: value.price, available: variantIsAvailable})
    })

    return (
      <tbody className={focus === category ? "menu-container" : "hidden"}>
        <tr>
          <td>
            <div>
              {item.name}
            </div>
          </td>

          <td></td>

          <td>
            <span>
              <ToggleSwitch item={item.name} checked={itemAvailable} updateStorage={updateStorage} global={true} />
            </span>
          </td>
        </tr>

        {variants.map(variant => (
          <tr key={variant.id} className="menu-item">
            <td>
              <div className="variant-name">
                <span>{variant.name}</span>
              </div>
            </td>

            <td style={{'width': '5vw'}}>
              <span>{variant.price}</span>
            </td>

            <td>
              <span>
                <ToggleSwitch item={variant.id} checked={variant.available} updateStorage={updateStorage} />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    )
  })

  if (menu.updated) setMenu({...menu, updated: false});

  return (
    <>
      {displayItems}
    </>
  )
}
