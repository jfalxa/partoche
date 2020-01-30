import React from 'react'
import { arrayOf, number, string } from 'prop-types'

import { keyToNote, noteToString } from '../utils/conversion'
import { computeChord } from '../music/chords'

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

const Chord = ({ keys, scoreKeys = [], ...props }) => {
  const details = keys.map(keyToNote)
  const notes = details.map(noteToString).join('-')
  const chord = computeChord(details)

  const scoreDetails = scoreKeys.map(keyToNote)
  const scoreNotes = scoreDetails.map(noteToString).join('-')
  const scoreChord = computeChord(scoreDetails)

  return (
    <div
      {...props}
      css={{
        display: 'flex',
        justifyContent: 'center',
        height: 24,
        margin: 4
      }}
    >
      <div css={{ color: 'limegreen' }}>
        {!chord && <ChordName name={notes} />}
        {chord && <ChordName name={chord} />}
        {chord && <NoteList notes={notes} />}
      </div>

      {keys.length > 0 && scoreKeys.length > 0 && (
        <span css={{ margin: '0 8px' }}>/</span>
      )}

      <div css={{ color: 'gray' }}>
        {!scoreChord && <ChordName name={scoreNotes} />}
        {scoreChord && <ChordName name={scoreChord} />}
        {scoreChord && <NoteList notes={scoreNotes} />}
      </div>
    </div>
  )
}

Chord.propTypes = {
  keys: arrayOf(number),
  scoreKeys: arrayOf(number)
}

export default Chord
