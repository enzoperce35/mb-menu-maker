import React, { useEffect, useState, useMemo } from "react";
import { allItems } from "../../../all_items";
import Item from "./item";

export default function Items({ group, focus }) {
  const items = useMemo(() => allItems.filter(item => item.group === group), [group]);
  const [menu, setMenu] = useState({ items, updated: false });
  const [variantsDisplayed, setVariantsDisplayed] = useState([]);
  const [openedVariantsCount, setOpenedVariantsCount] = useState(() => {
      return Object.fromEntries(items.map(item => [item.name, 0])); // Initialize all items with 0 openedVariants
  });

  useEffect(() => {
    const handleStorageUpdate = () => {
      setMenu(prevMenu => ({ ...prevMenu, updated: !prevMenu.updated }));
    }
    
    window.addEventListener("localStorageUpdate", handleStorageUpdate);
    
    return () => window.removeEventListener("localStorageUpdate", handleStorageUpdate);
  }, []);

  const setVariantVisibility = (item) => {
    setVariantsDisplayed(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleOpenedVariantsChange = (itemName, count) => {
    setOpenedVariantsCount(prev => ({ ...prev, [itemName]: count }));
  };

  return (
    <>
      {/* Items with at least 1 available variant */}
      <tbody className={focus === group ? "menu-container" : "hidden"}>
        {menu.items
          .filter(item => (openedVariantsCount[item.name] || 0) > 0)
          .map((item) => (
            <Item
              key={item.name}
              item={item}
              setVariantVisibility={setVariantVisibility}
              variantsAreDropped={variantsDisplayed.includes(item.name)}
              onOpenedVariantsChange={handleOpenedVariantsChange}
              available={true}
            />
          ))
        }
      </tbody>

      {/* Items without available variant */}
      <tbody className={focus === group ? "menu-container" : "hidden"}>
        {menu.items
          .filter(item => (openedVariantsCount[item.name] || 0) === 0)
          .map((item) => (
            <Item
              key={item.name}
              item={item}
              setVariantVisibility={setVariantVisibility}
              variantsAreDropped={variantsDisplayed.includes(item.name)}
              onOpenedVariantsChange={handleOpenedVariantsChange}
              available={false}
            />
          ))
        }
      </tbody>
    </>
  );
}
