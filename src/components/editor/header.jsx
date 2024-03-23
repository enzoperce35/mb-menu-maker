export default function Header({focus, scroll, switchView}) {

  return (
    <div id="header">
      <div id="scroller">
        <span onClick={() => scroll('left')}>{'<'}</span>
        <span onClick={() => switchView()}>{`GROUP ${focus}`}</span>
        <span onClick={() => scroll('right')}>{'>'}</span>
      </div>
    </div>
  )
}
