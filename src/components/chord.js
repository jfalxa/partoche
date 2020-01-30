import React from 'react'
import { arrayOf, number } from 'prop-types'

import { keyToNote } from '../utils/conversion'

const Chord = ({ keys = [], ...props }) => {
  const notes = keys.map(keyToNote)
  const noteNames = notes.map(n => `${n.note}${n.accidental || ''}`).join('-')
  const chord = ''

  return (
    <div
      {...props}
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        fontFamily: 'monospace',
        height: 15
      }}
    >
      {keys.length > 0 && `${chord} (${noteNames})`}
    </div>
  )
}

Chord.propTypes = {
  keys: arrayOf(number)
}

export default Chord
