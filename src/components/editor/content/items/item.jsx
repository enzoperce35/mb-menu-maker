import { useEffect, useState } from "react";
import ToggleSwitch from "../toggleswitch";
import Variants from "./variants";

export default function Item({ item, setVariantVisibility, variantsAreDropped, onOpenedVariantsChange, available }) {
  const { name, variants } = item;
  const variantCount = Object.keys(variants).length;
  const hasSingleVariant = variantCount === 1;

  const getOpenedVariants = () => 
    Object.keys(variants).filter(variant => !localStorage.getItem(`${name}${variant}`)).length;

  const [openedVariants, setOpenedVariants] = useState(getOpenedVariants());

  useEffect(() => {
    onOpenedVariantsChange(name, openedVariants); // Pass initial count to parent

    const handleStorageUpdate = () => {
      const newOpenedVariants = getOpenedVariants();
      setOpenedVariants(newOpenedVariants);
      onOpenedVariantsChange(name, newOpenedVariants); // Notify parent
    };

    window.addEventListener("localStorageUpdate", handleStorageUpdate);
    return () => window.removeEventListener("localStorageUpdate", handleStorageUpdate);
  }, []);

  return (
    <>
      <tr style={{backgroundColor: available ? "#ADD8E6" : "#E6E6FA"}} className={hasSingleVariant ? "hidden" : "menu-item"}>
        <td className="item-name">
          <span>
            {name}
            <em className="availability-ratio">{`${openedVariants} / ${variantCount}`}</em>
          </span>
          <span className="variant-toggle" onClick={() => setVariantVisibility(name)}>
            {variantsAreDropped ? "\u25B2" : "\u25BC"}
          </span>
        </td>

        <td></td>

        <td className="availability-toggle">
          <span>
            <ToggleSwitch itemId={name} checked={openedVariants > 0} motherItem={true} />
          </span>
        </td>
      </tr>

      {(hasSingleVariant || variantsAreDropped) &&
        Object.entries(variants).map(([variantName, variantValue]) => (
          <Variants
            key={`${name}-${variantName}`}
            variantName={variantName}
            variantValue={variantValue}
            itemName={name}
            singleVariant={hasSingleVariant}
            itemAvailable={available}
          />
        ))}
    </>
  );
}
