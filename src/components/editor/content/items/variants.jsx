import ToggleSwitch from "../toggleswitch";

export default function Variants({variantName, variantValue, itemName, singleVariant, itemAvailable}) {
  const variantId = `${itemName}${variantName}`;
  const variantIsAvailable = localStorage.getItem(variantId) === null;

  return (
    <tr style={{backgroundColor: itemAvailable ? "#F0FFF0" : "#FFF5EE"}} key={variantId} className={"menu-item"}>
      <td className={singleVariant ? '' : 'multi-variant'}>
        {variantName}
      </td>

      <td className={'variant-price'}>
        <span>{variantValue.price}</span>
      </td>

      <td className="availability-toggle">
        <span>
          <ToggleSwitch itemId={variantId} checked={variantIsAvailable}/>
        </span>
      </td>
    </tr>
  )
}
