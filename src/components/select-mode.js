import React from 'react'
import { number, func } from 'prop-types'

const MODES = [
  '- Ionian\xA0\xA0\xA0\xA0\xA0(I)',
  '- Dorian\xA0\xA0\xA0\xA0\xA0(II)',
  '- Phrygian\xA0\xA0\xA0(III)',
  '- Lydian\xA0\xA0\xA0\xA0\xA0(IV)',
  '- Mixolydian\xA0(V)',
  '- Aeolian\xA0\xA0\xA0\xA0(VI)',
  '- Locrian\xA0\xA0\xA0\xA0(VII)'
]

const SelectMode = ({ mode, setMode }) => (
  <select
    value={mode}
    onChange={e => setMode(parseInt(e.target.value, 10))}
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

SelectMode.propTypes = {
  mode: number,
  setMode: func
}

export default SelectMode
