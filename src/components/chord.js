import React from 'react'
import { arrayOf, number, string, bool, object } from 'prop-types'

import { computeChord } from '../music/chords'
import { noteToString, keyToNote } from '../utils/conversion'

const ChordName = ({ root, name }) => (
  <span css={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 'bold' }}>
    {noteToString(root)}
    {name}
  </span>
)

ChordName.propTypes = {
  root: object,
  name: string
}

const NoteList = ({ small, notes = [] }) => {
  const noteList = notes.map(n => noteToString(n)).join('-')

  return (
    <span
      css={{
        fontFamily: 'monospace',
        fontSize: small ? 13 : 20,
        fontWeight: small ? 'normal' : 'bold',
        marginLeft: 4
      }}
    >
      {small ? `(${noteList})` : noteList}
    </span>
  )
}

NoteList.propTypes = {
  small: bool,
  notes: arrayOf(object)
}

const Chord = ({ keys, scoreKeys = [], ...props }) => {
  const notes = keys.map(keyToNote)
  const scoreNotes = scoreKeys.map(keyToNote)

  const [chord, chordNotes] = computeChord(notes)
  const [scrChord, scrChordNotes] = computeChord(scoreNotes)

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
        {!chord && <NoteList notes={notes} />}

        {chord && <ChordName root={chordNotes[0]} name={chord} />}
        {chord && <NoteList small notes={chordNotes} />}
      </div>

      {keys.length > 0 && scoreKeys.length > 0 && (
        <span css={{ margin: '0 8px' }}>/</span>
      )}

      <div css={{ color: 'gray' }}>
        {!scrChord && <NoteList notes={scoreNotes} />}

        {scrChord && <ChordName root={scrChordNotes[0]} name={scrChord} />}
        {scrChord && <NoteList small notes={scrChordNotes} />}
      </div>
    </div>
  )
}

Chord.propTypes = {
  keys: arrayOf(number),
  scoreKeys: arrayOf(number)
}

export default Chord
