import React, { useEffect, useState } from "react";
import { allItems } from "../../../all_items";
import Item from "./item";

const getItems = (group) => allItems.filter(item => item.group === group);

export default function Items({group, focus}) {
  const [menu, setMenu] = useState({items: getItems(group), updated: false});
  const [variantsDisplayed, setVariantsDisplayed] = useState([]);

  useEffect(() => {
    const handleStorageUpdate = () => {
      setMenu({...menu, updated: true})
    };

    window.addEventListener("localStorageUpdate", handleStorageUpdate);

    return () => window.removeEventListener("localStorageUpdate", handleStorageUpdate);
  }, []);

  // collected items were to be closed in the menu
  const setVariantVisibility = (item) => {
    if (variantsDisplayed.includes(item)) {
      setVariantsDisplayed(openedItems => openedItems.filter(i => item !== i))  //delete: open item variant
    } else {
      setVariantsDisplayed(openedItems => [...openedItems, item])  //add: close item variant
    }
  }

  return (
    <tbody className={focus === group ? "menu-container" : "hidden"}>
      {Object.entries(menu.items).map((item) => {
        const [_, value] = item;
        const variantsAreOpened = variantsDisplayed.includes(value.name)
              
        return (
          <Item item={value} setVariantVisibility={setVariantVisibility} variantsAreOpened={variantsAreOpened}/>
        )
      })}
    </tbody>
  )
}
