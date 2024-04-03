import ToggleSwitch from "../toggleswitch";
import ScheduleSetter from "../schedule_setter";

export default function Variants({variant, variantsAreHidden, variantCount, editMode, updateLocalStorage, updateSessionStorage}) {

  if (editMode === 'time schedule') variantsAreHidden = true;

  return (
    <tr key={variant.id} className={(variantsAreHidden || variantCount < 2) ? "menu-item" : "hidden"}>
      <td>
        <div className={(variantCount < 2) ? "solo-variant" : "variant-name"}>
          <span>
            {`${variant.name} ${variant.schedule}`}
          </span>
        </div>
      </td>

      <td className={'variant-price'}>
        <span>{variant.price}</span>
      </td>

      <td className="availability-toggle">
        <span>
          { editMode === 'availability' && <ToggleSwitch item={variant.id} checked={variant.available} updateLocalStorage={updateLocalStorage} />}
          { editMode === 'time schedule' && <ScheduleSetter item={variant.id} updateSessionStorage={updateSessionStorage} schedule={`${variant.schedule}`} />}
        </span>
      </td>
    </tr>
  )
}
