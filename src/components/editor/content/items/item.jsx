import ToggleSwitch from "../toggleswitch";

export default function Item({editMode, item, itemAvailable, updateLocalStorage, variantCount, variantsAreHidden, setVariantVisibility}) {

  return (
    <tr className={(variantCount < 2) ? "hidden" : "menu-item"}>
      <td className="item-name">
        <span>
          {item.name}
          <em className={(editMode !== 'availability') ? 'hidden' : 'availability-ratio'}>{`${itemAvailable} / ${variantCount}`}</em>
        </span>

        <span className={(editMode === 'time schedule') ? 'hidden' : 'variant-toggle'} onClick={() => setVariantVisibility(item)}>
          {variantsAreHidden ? "\u25b2" : "\u25bc"}
        </span>
      </td>

      <td></td>

      <td className="availability-toggle">
        <span>
          {editMode === 'availability' && <ToggleSwitch item={item.name} checked={itemAvailable>0} updateLocalStorage={updateLocalStorage} global={true} />}
        </span>
      </td>
    </tr>
  )
}
