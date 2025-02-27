import { useSwipeable } from 'react-swipeable';
import InitialView from './components/initial_view/initial_view';
import TextView from './components/text_view/text_view';
import Preview from './components/preview/preview';
import Editor from './components/editor/editor';
import { useState } from "react";
import './App.css'

export default function App() {
  const [focus, setFocus] = useState(0);
  const [view, setView] = useState('primary');

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    swipeDuration: 300,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const scroll = (direction) => {
    const newFocus = (direction === 'right') ? focus + 1 : focus - 1;

    if (newFocus < 0) {
      setFocus(3)
    }
    else if (newFocus > 3) {
      setFocus(0)
    }
    else {
      setFocus(newFocus)
    }
  }

  const groupTitle = () => {
    if (focus > 0) {
      return `GROUP ${focus}`
    }
    else {
      return view === 'primary' ? 'Check Items' : 'Text Menu'
    }
  };

  return (
    <div id={'container'}>
      <div {...handlers} id='header'>
        <div id="navigator">
          <span className="scrollers" onClick={() => scroll('left')}>{'<'}</span>
          
          <h2 onClick={() => setView(view === 'primary' ? 'secondary' : 'primary')}>
            {groupTitle()}
          </h2>
          
          <span className="scrollers"  onClick={() => scroll('right')}>{'>'}</span>
        </div>
      </div>
      
      <div>
        {view === 'secondary' && focus === 0 && <TextView />}
        {view === 'primary' && focus === 0 && <InitialView />}
        {view === 'primary' && focus > 0 && <Editor focus={focus}/>}
        {view === 'secondary' && focus > 0 && <Preview focus={focus}/>}
      </div>
    </div>
  )
}
