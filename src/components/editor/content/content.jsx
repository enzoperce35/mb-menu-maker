import Items from "./items/items";
import {default as clockIcon} from "../../../assets/icons/clock.svg";
import {default as toggleIcon} from "../../../assets/icons/toggle.svg";

export default function Content({focus, editMode, modeSwitch}) {

  return (
    <table>
      <>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th id={'edit-switch'} onClick={() => modeSwitch()}>
              <img src={editMode === 'availability' ? clockIcon : toggleIcon} />
            </th>
          </tr>
        </thead>

        <Items group={1} focus={focus} editMode={editMode}/>
        <Items group={2} focus={focus} editMode={editMode}/>
        <Items group={3} focus={focus} editMode={editMode}/>
      </>
    </table>

  )
}
