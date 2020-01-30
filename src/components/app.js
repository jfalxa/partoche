import React from 'react'

import useApp from '../hooks/app'
import Keyboard from './keyboard'
import SelectRoot from './select-root'
import SelectMode from './select-mode'
import SelectIntervals from './select-intervals'
import KeyScore from './key-score'
import PlayButton from './play-button'
import Chord from './chord'

const Container = props => (
  <div
    {...props}
    css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh'
    }}
  />
)

const App = () => {
  const app = useApp()

  return (
    <Container>
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

      <KeyScore tick={app.tick} keys={app.keys} score={app.score} />

      <Chord keys={app.score[app.tick]} />

      <PlayButton
        disabled={app.score.length === 0}
        tick={app.tick}
        playing={app.playing}
        setPlaying={app.setPlaying}
      />

      <button disabled={app.score.length === 0} onClick={app.clear}>
        Clear
      </button>

      <Keyboard
        value={app.keys}
        highlighted={app.score[app.tick]}
        onChange={app.setKeys}
      />
    </Container>
  )
}

export default App
