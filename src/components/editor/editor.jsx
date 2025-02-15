import { useState } from "react"
import Header from "./header"
import Content from "./content/content"
import { useSwipeable } from "react-swipeable";

export default function Editor({focus, scroll, switchView}) {
  const [editMode, setEditMode] = useState('availability');

  const modeSwitch = () => {
    setEditMode(editMode === 'availability' ? 'time schedule' : 'availability')
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    swipeDuration: 300,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <div {...handlers} id={"editor"}>
      <Header focus={focus} scroll={scroll} switchView={switchView}/>
      <Content focus={focus} editMode={editMode} modeSwitch={modeSwitch} />
    </div>
  )
}
