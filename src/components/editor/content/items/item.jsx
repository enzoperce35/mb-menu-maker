import ToggleSwitch from "../toggleswitch";
import Variants from "./variants";

export default function Item({item, setVariantVisibility, variantsAreOpened}) {
  const name = item.name
  const variants = item.variants
  const variantCount = Object.keys(item.variants).length
  const hasSingleVariant = variantCount === 1
  const openedVariants = (() => {
    return Object.keys(variants).filter(variant => !Object.keys(localStorage).includes(`${name}${variant}`)).length;
  })();

  return (
    <>
      <tr className={hasSingleVariant ? "hidden" : "menu-item"}>
        <td className="item-name">
          <span>
            {name}
            <em className={'availability-ratio'}>{`${openedVariants} / ${variantCount}`}</em>
          </span>

          <span className={'variant-toggle'} onClick={() => setVariantVisibility(name)}>
            {variantsAreOpened ? "\u25b2" : "\u25bc"}
          </span>
       </td>

        <td></td>

        <td className="availability-toggle">
          <span>
            <ToggleSwitch itemId={name} checked={openedVariants > 0} motherItem={true} />
         </span>
        </td>
      </tr>

      {(hasSingleVariant || variantsAreOpened) && Object.entries(variants).map(variant => {
        const [variantName, variantValue] = variant;

        return (
          <Variants variantName={variantName} variantValue={variantValue} itemName={name} singleVariant={hasSingleVariant}/>
        )
      })}
    </>
  )
}
