import React from 'react'
import { number, func } from 'prop-types'

const CHORDS = [
  '- No chord',
  '- 2 note chord',
  '- 3 note chord',
  '- 4 note chord'
]

const SelectChord = ({ chord, setChord, ...props }) => (
  <select
    {...props}
    value={chord}
    onChange={e => setChord(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    {CHORDS.map((chord, i) => (
      <option key={chord} value={i + 1}>
        {chord}
      </option>
    ))}
  </select>
)

SelectChord.propTypes = {
  chord: number,
  setChord: func
}

export default SelectChord
