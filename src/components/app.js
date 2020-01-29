import React from 'react'

import useApp from '../hooks/app'
import Keyboard from './keyboard'
import SelectRoot from './select-root'
import SelectMode from './select-mode'
import SelectIntervals from './select-intervals'
import KeyScore from './key-score'
import PlayButton from './play-button'

const App = () => {
  const app = useApp()

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
      }}
    >
      <SelectRoot root={app.root} setRoot={app.setRoot} />

      <SelectMode
        disabled={app.root < 0}
        mode={app.mode}
        setMode={app.setMode}
      />

      <SelectIntervals
        disabled={app.mode < 0}
        intervals={app.intervals}
        setIntervals={app.setIntervals}
      />

      <button onClick={app.reset}>reset</button>

      <KeyScore chords={app.score} />

      <PlayButton
        disabled={app.score.length === 0}
        tick={app.tick}
        playing={app.playing}
        setPlaying={app.setPlaying}
      />

      <Keyboard
        value={app.keys}
        highlighted={app.score[app.tick]}
        onChange={app.setKeys}
      />
    </div>
  )
}

export default App
