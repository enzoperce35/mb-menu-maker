import Contents from "./contents/contents"

export default function Preview({focus}) {

  return (
   <div id={'preview-content'}>
      <Contents focus={focus} group={1}/>
      <Contents focus={focus} group={2}/>
      <Contents focus={focus} group={3}/>
    </div>
  )
}
