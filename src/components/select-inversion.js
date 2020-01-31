import React from 'react'
import { number, func } from 'prop-types'

const MODES = [
  '- No inversion',
  '- 1st inversion',
  '- 2nd inversion',
  '- 3rd inversion'
]

const SelectInversion = ({ intervals, inversion, setInversion, ...props }) => (
  <select
    {...props}
    value={inversion}
    onChange={e => setInversion(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    {MODES.map((inversion, i) => (
      <option disabled={i >= intervals} key={inversion} value={i}>
        {inversion}
      </option>
    ))}
  </select>
)

SelectInversion.propTypes = {
  intervals: number,
  inversion: number,
  setInversion: func
}

export default SelectInversion
