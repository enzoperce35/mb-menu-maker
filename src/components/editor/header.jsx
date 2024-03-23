export default function Header({focus, scroll, switchView}) {

  return (
    <div id="header">
      <div id="scroller" onClick={() => switchView()}>
        <span onClick={() => scroll('left')}>{'<'}</span>
        <span>{`GROUP ${focus}`}</span>
        <span onClick={() => scroll('right')}>{'>'}</span>
      </div>
    </div>
  )
}
