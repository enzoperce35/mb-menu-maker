import React, { useState } from "react";
import { allItems } from "./all_items";

const getItems = (group) => allItems.filter(item => item.group === group);

export default function Items({group}) {
  const [menu, setMenu] = useState({items: getItems(group), updated: false})

  const updateStorage = (id, available) => {
    available ? localStorage.setItem(id, 'available') : localStorage.removeItem(id)

    setMenu({...menu, updated: true});
  }

  const displayItems = menu.items.map((item) => (
    Object.entries(item.varieties).map((variety, i) => {
      const [key, value] = variety;
      const itemId = `${item.name}${key}`;
      const itemIsAvailable = localStorage.getItem(itemId) === null;

      return (
        <tr key={itemId} className="menu-item">
          <td>
            <div className={ i==0 ? 'item-name' : 'hidden' }>
              {item.name}
            </div>
          </td>

          <td>{key}</td>

          <td>{value.price}</td>

          <td>
            <span onClick={() => updateStorage(itemId, itemIsAvailable)}>
              {itemIsAvailable ? 'available' : 'unavailable'}
            </span>
          </td>
        </tr>
      )
    })
  ))

  if (menu.updated) setMenu({...menu, updated: false});

  return (
    <>
      {displayItems}
    </>
  )
}
