export default function Header({focus, scroll, switchView}) {

  return (
    <div id="header">
      <span onClick={() => switchView()} id="preview-link">
        PREVIEW
      </span>

      <div id="scroller">
        <span onClick={() => scroll('left')}>{'<'}</span>
        <span>{`GROUP ${focus}`}</span>
        <span onClick={() => scroll('right')}>{'>'}</span>
      </div>
    </div>
  )
}
