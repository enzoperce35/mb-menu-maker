import Header from "./header"
import Content from "./content/content"

export default function Editor({focus, scroll, switchView}) {

  return (
    <div id={"editor"}>
      <Header focus={focus} scroll={scroll} switchView={switchView} />
      <Content focus={focus} />
    </div>
  )
}
