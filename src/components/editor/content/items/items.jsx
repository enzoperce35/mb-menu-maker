import React, { useState } from "react";
import { allItems } from "../../../all_items";
import Item from "./item";
import Variants from "./variants";


const getItems = (group) => allItems.filter(item => item.group === group);

export default function Items({group, focus, editMode}) {
  const [menu, setMenu] = useState({items: getItems(group), updated: false});
  const [variantsHidden, setVariantsHidden] = useState([]);

  const updateLocalStorage = (id, available, global) => {
    if (global) {
      let item = allItems.find(i => i.name === id)

      Object.keys(item.variants).map(key => {
        const variantId = `${id}${key}`;

        available ? localStorage.setItem(variantId, 'unavailable') : localStorage.removeItem(variantId)
      })
    } else {
      available ? localStorage.setItem(id, 'unavailable') : localStorage.removeItem(id);
    }

    setMenu({...menu, updated: true});
  }

  // item time chedule was clicked
  const updateSessionStorage = (id, time_string) => {
    time_string === '' ? sessionStorage.removeItem(id) : sessionStorage.setItem(id, time_string);

    setMenu({...menu, updated: true});
  }

  const setVariantVisibility = (item) => {
    if (variantsHidden.includes(item.name)) {
      setVariantsHidden(openedItems => openedItems.filter(i => item.name !== i))
    } else {
      setVariantsHidden(openedItems => [...openedItems, item.name])
    }
  }

  if (menu.updated) setMenu({...menu, updated: false});

  return (
    <>
      {menu.items.map((item) => {
        let variants = [];
        let itemAvailable = 0;
        let variantsAreHidden = variantsHidden.includes(item.name);

        Object.entries(item.variants).map(variant => {
          const [key, value] = variant;
          const variantId = `${item.name}${key}`;
          const variantSchedule = sessionStorage.getItem(variantId);
          const variantIsAvailable = localStorage.getItem(variantId) === null;

          if (variantIsAvailable) itemAvailable += 1;

          variants.push({name: key, id: variantId, price: value.price, available: variantIsAvailable, schedule: variantSchedule})
        })

        return (
          <tbody className={focus === group ? "menu-container" : "hidden"}>
            <Item editMode={editMode} item={item} itemAvailable={itemAvailable} updateLocalStorage={updateLocalStorage} variantCount={variants.length} variantsAreHidden={variantsAreHidden} setVariantVisibility={setVariantVisibility}/>

            {variants.map(variant => <Variants variant={variant} variantsAreHidden={variantsAreHidden} variantCount={variants.length} editMode={editMode} updateLocalStorage={updateLocalStorage} updateSessionStorage={updateSessionStorage}/>)}
          </tbody>
        )
      })}
    </>
  )
}
