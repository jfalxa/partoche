import React from 'react'
import { number, func } from 'prop-types'
import { keyToNote } from '../utils/conversion'

const KEYS = [...Array(76).keys()].map(keyToNote)

const SelectRoot = ({ root, setRoot, ...props }) => (
  <select
    {...props}
    value={root}
    onChange={e => setRoot(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    <option value={-1}>- No root</option>
    {KEYS.map(root => (
      <option key={root.key} value={root.key}>
        - {`${root.note}${root.octave}`}
      </option>
    ))}
  </select>
)

SelectRoot.propTypes = {
  root: number,
  setRoot: func
}

export default SelectRoot
