import React, { useState, useEffect } from 'react'

import scale, { MODES } from '../music/scales'
import { keyToNote } from '../utils/conversion'
import Keyboard from './keyboard'
import { Score, Staff, GClef, WholeNote } from './score'

const App = () => {
  const [keys, setKeys] = useState([])
  const [mode, setMode] = useState(-1)

  function changeMode(e) {
    const selectedMode = e.target.value
    setMode(selectedMode)
  }

  useEffect(() => {
    if (mode < 0) {
      setKeys(k => k.slice(0, 1))
    } else {
      setKeys(k => (k.length > 0 ? scale(k[0], mode) : k))
    }
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
      <select
        value={mode}
        onChange={changeMode}
        css={{ fontFamily: 'monospace' }}
      >
        <option value={-1}>&nbsp;&nbsp;_. No mode</option>
        {MODES.map((mode, i) => (
          <option key={mode} value={i}>
            {mode}
          </option>
        ))}
      </select>

      <Score css={{ margin: 'auto', zoom: 2 }} width="300" height="60">
        <Staff>
          <GClef />
          {keys.map((key, i) => (
            <WholeNote key={`${key}-${i}`} tick={i} {...keyToNote(key)} />
          ))}
        </Staff>
      </Score>

      <Keyboard
        value={keys}
        onChange={setKeys}
        css={{ width: '100%', height: '20%' }}
      />
    </div>
  )
}

export default App
