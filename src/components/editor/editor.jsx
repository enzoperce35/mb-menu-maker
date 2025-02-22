import Items from "./content/items/items";

export default function Editor({focus}) {
  
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <Items group={1} focus={focus}/>
      <Items group={2} focus={focus}/>
      <Items group={3} focus={focus}/>
    </table>
  )
}
