import React from 'react'
import { arrayOf, number, string } from 'prop-types'

import { keyToNote } from '../utils/conversion'
import { stringifyNotes, computeChord } from '../music/chords'

const ChordName = ({ name }) => (
  <span css={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 'bold' }}>
    {name}
  </span>
)

ChordName.propTypes = { name: string }

const NoteList = ({ notes }) => (
  <span
    css={{
      fontFamily: 'monospace',
      fontSize: 13,
      fontWeight: 'bold',
      marginLeft: 4
    }}
  >
    ({notes})
  </span>
)
NoteList.propTypes = { notes: string }

const Chord = ({ keys = [], ...props }) => {
  const details = keys.map(keyToNote)

  const notes = stringifyNotes(details)
  const chord = computeChord(details)

  return (
    <div
      {...props}
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        margin: 4,
        height: 22
      }}
    >
      {keys.length < 3 && <ChordName name={notes} />}
      {keys.length > 2 && <ChordName name={chord} />}
      {keys.length > 2 && <NoteList notes={notes} />}
    </div>
  )
}

Chord.propTypes = {
  keys: arrayOf(number)
}

export default Chord
