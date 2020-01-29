import React from 'react'

import Keyboard from './keyboard'
import SelectMode from './select-mode'
import SelectChord from './select-chord'
import KeyScore from './key-score'
import useApp from '../hooks/app'

const App = () => {
  const { keys, mode, chord, setKeys, setMode, setChord } = useApp()

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
      }}
    >
      <SelectMode disabled={keys.length === 0} mode={mode} setMode={setMode} />
      <SelectChord disabled={mode === -1} chord={chord} setChord={setChord} />

      <KeyScore keys={keys} chord={chord} />

      <Keyboard
        value={keys}
        onChange={setKeys}
        css={{ width: '100%', height: '20%' }}
      />
    </div>
  )
}

export default App
