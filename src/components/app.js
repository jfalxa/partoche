import React, { useState, useEffect } from 'react'
import { number, func, arrayOf } from 'prop-types'

import { keyToNote } from '../utils/conversion'
import scale, { MODES } from '../music/scales'

import Keyboard from './keyboard'
import { Score, Staff, GClef, Chord } from './score'
import { listChords, CHORDS } from '../music/chords'

const ModeSelect = ({ mode, setMode }) => (
  <select
    value={mode}
    onChange={e => setMode(e.target.value)}
    css={{ fontFamily: 'monospace' }}
  >
    <option value={-1}>- No mode</option>
    {MODES.map((mode, i) => (
      <option key={mode} value={i}>
        {mode}
      </option>
    ))}
  </select>
)

ModeSelect.propTypes = {
  mode: number,
  setMode: func
}

const ChordSelect = ({ chord, setChord }) => (
  <select
    value={chord}
    onChange={e => setChord(e.target.value)}
    css={{ fontFamily: 'monospace' }}
  >
    {CHORDS.map((chord, i) => (
      <option key={chord} value={i + 1}>
        {chord}
      </option>
    ))}
  </select>
)

ChordSelect.propTypes = {
  chord: number,
  setChord: func
}

const KeyScore = ({ keys, chord }) => {
  const chords = listChords(keys, chord).map(k => k.map(keyToNote))

  return (
    <Score css={{ margin: 'auto' }}>
      <Staff>
        <GClef />
        {chords.map((chord, i) => (
          <Chord key={i} tick={i} notes={chord} />
        ))}
      </Staff>
    </Score>
  )
}

KeyScore.propTypes = {
  keys: arrayOf(number),
  chord: number
}

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
      <ModeSelect mode={mode} setMode={setMode} />
      <ChordSelect chord={chord} setChord={setChord} />

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
