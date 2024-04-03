import { useState } from "react"
import Header from "./header"
import Content from "./content/content"

export default function Editor({focus, scroll, switchView}) {
  const [editMode, setEditMode] = useState('availability');

  const modeSwitch = () => {
    setEditMode(editMode === 'availability' ? 'time schedule' : 'availability')
  }

  return (
    <div id={"editor"}>
      <Header focus={focus} scroll={scroll} switchView={switchView}/>
      <Content focus={focus} editMode={editMode} modeSwitch={modeSwitch} />
    </div>
  )
}
