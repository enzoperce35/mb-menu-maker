import Menu from './components/store_menu/menu'
import Header from './components/header'
import { useState } from "react";
import { allItems } from './components/all_items';
import './App.css'

const MenuCategories = [...new Set(allItems.map(item => item.category))]

export default function App() {
  const [focus, setFocus] = useState(0)

  const scroll = (direction) => {
    const newFocus = (direction === 'right') ? focus + 1 : focus - 1;

    if (newFocus < 0) {
      setFocus(0)
    }
    else if (newFocus > MenuCategories.length-1) {
      setFocus(-1)
    }
    else {
      setFocus(newFocus)
    }
  }

  return (
    <div id={'container'}>
       <Header focus={MenuCategories.at(focus) } scroll={scroll}/>
       <Menu focus={MenuCategories.at(focus)} />
    </div>
  )
}
