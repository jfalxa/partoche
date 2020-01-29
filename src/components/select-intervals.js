import React from 'react'
import { number, func } from 'prop-types'

const INTERVALS = [
  '- No chord',
  '- 2 note chord',
  '- 3 note chord',
  '- 4 note chord'
]

const SelectIntervals = ({ intervals, setIntervals, ...props }) => (
  <select
    {...props}
    value={intervals}
    onChange={e => setIntervals(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    {INTERVALS.map((intervals, i) => (
      <option key={intervals} value={i + 1}>
        {intervals}
      </option>
    ))}
  </select>
)

SelectIntervals.propTypes = {
  intervals: number,
  setIntervals: func
}

export default SelectIntervals
