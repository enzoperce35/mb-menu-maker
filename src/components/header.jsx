export default function Header({focus, scroll}) {

  return (
    <div id="header">
      <span id="preview">
        PREVIEW
      </span>

      <div id="scroller">
        <span onClick={() => scroll('left')}>{'<'}</span>
        <span>{focus}</span>
        <span onClick={() => scroll('right')}>{'>'}</span>
      </div>
    </div>
  )
}