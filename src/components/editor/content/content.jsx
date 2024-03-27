import Items from "./items"

export default function Content({focus}) {
  return (
    <table>
      <Items group={1} focus={focus}/>
      <Items group={2} focus={focus}/>
    </table>
  )
}
