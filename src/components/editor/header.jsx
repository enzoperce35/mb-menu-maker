export default function Header({focus, scroll, switchView}) {

  return (
    <div id="header">
      <div id="scroller">
        <span className="scrollers" onClick={() => scroll('left')}>{'<'}</span>
        <span onClick={() => switchView()}>{`GROUP ${focus}`}</span>
        <span className="scrollers"  onClick={() => scroll('right')}>{'>'}</span>
      </div>
    </div>
  )
}
