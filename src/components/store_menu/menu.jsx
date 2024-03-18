import Items from "./items"

export default function Menu() {
  return (
    <table>
      <tbody className="menu-container">
        <Items group='merienda' />
        <Items group='lunch' />
      </tbody>
    </table>
  )
}
