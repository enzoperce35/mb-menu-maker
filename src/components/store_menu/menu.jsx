import Items from "../items"

export default function Menu({focus}) {
  return (
    <table>
      <Items category='merienda' focus={focus}/>
      <Items category='lunch' focus={focus}/>
    </table>
  )
}
