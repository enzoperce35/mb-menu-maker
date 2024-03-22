import Contents from "./preview_contents"

export default function Preview({focus, scroll, switchView}) {


  return (
    <div id="preview-scroller">
      <span onClick={() => scroll('left')}>{'<'}</span>
        <div onClick={() => switchView()} >
          <Contents focus={focus} group={1}/>
          <Contents focus={focus} group={2}/>
          <Contents focus={focus} group={3}/>
        </div>
      <span onClick={() => scroll('right')}>{'>'}</span>
    </div>
  )
}
