import React from 'react'
import { number, func } from 'prop-types'

const KEYS = Array(88)
  .fill(0)
  .map((_, i) => `- ${i}`)

const SelectRoot = ({ root, setRoot, ...props }) => (
  <select
    {...props}
    value={root}
    onChange={e => setRoot(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    <option value={-1}>- No root</option>
    {KEYS.map((root, i) => (
      <option key={root} value={i}>
        {root}
      </option>
    ))}
  </select>
)

SelectRoot.propTypes = {
  root: number,
  setRoot: func
}

export default SelectRoot
