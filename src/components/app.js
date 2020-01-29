import React, { useState, useEffect } from 'react'

import scale from '../music/scales'

import Keyboard from './keyboard'
import SelectMode from './select-mode'
import SelectChord from './select-chord'
import KeyScore from './key-score'

const App = () => {
  const [keys, setKeys] = useState([])
  const [mode, setMode] = useState(-1)
  const [chord, setChord] = useState(1)

  useEffect(() => {
    setKeys(k => {
      if (mode < 0) return k.slice(0, 1)
      else if (k.length > 0) return scale(k[0], mode)
      else return k
    })
  }, [mode])

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
