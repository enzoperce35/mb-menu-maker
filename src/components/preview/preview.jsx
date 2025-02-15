import Contents from "./contents/contents"
import { useSwipeable } from "react-swipeable"

export default function Preview({focus, scroll, switchView}) {

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    swipeDuration: 300,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <div {...handlers} id="preview-container">
      <div id={"preview-head"} >
        <span className="scrollers">
          <span onClick={() => scroll('left')} >{'<'}</span>
        </span>

        <h2 onClick={() => switchView()}>
          {`GROUP ${focus}`}
        </h2>

        <span className="scrollers">
          <span onClick={() => scroll('right')}>{'>'}</span>
        </span>
      </div>

      <div id={'preview-content'}>
        <Contents focus={focus} group={1}/>
        <Contents focus={focus} group={2}/>
        <Contents focus={focus} group={3}/>
      </div>
    </div>
  )
}
