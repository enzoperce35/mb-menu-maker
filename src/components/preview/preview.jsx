import Contents from "./contents/contents"

export default function Preview({focus, scroll, switchView}) {

  return (
    <div id="preview-container">
      <div id={"preview-head"} >
        <span>
          <span onClick={() => scroll('left') }>{'<'}</span>
        </span>

        <h2 onClick={() => switchView()}>
          {`GROUP ${focus}`}
        </h2>

        <span>
          <span onClick={() => scroll('right')}>{'>'}</span>
        </span>
      </div>

      <div id={'preview-content'}>
        <Contents focus={focus} group={1}/>
        <Contents focus={focus} group={2}/>
      </div>
    </div>
  )
}
