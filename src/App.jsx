import Preview from './components/preview/preview';
import Editor from './components/editor/editor';
import { useState } from "react";
import './App.css'

const MenuGroups = [1, 2, 3];

export default function App() {
  const [focus, setFocus] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const scroll = (direction) => {
    const newFocus = (direction === 'right') ? focus + 1 : focus - 1;

    if (newFocus < 1) {
      setFocus(3)
    }
    else if (newFocus > 3) {
      setFocus(1)
    }
    else {
      setFocus(newFocus)
    }
  }

  const switchView = () => {
    setShowPreview(showPreview === true ? false : true)
  }

  return (
    <div id={'container'}>
      {showPreview && <Preview focus={focus} scroll={scroll} switchView={switchView}/>}
      {!showPreview && <Editor focus={focus} scroll={scroll} switchView={switchView} />}
    </div>
  )
}
