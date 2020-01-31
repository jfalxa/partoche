import React from 'react'
import { arrayOf, number, string, bool, object } from 'prop-types'

import useChord from '../hooks/chord'
import { noteToString } from '../utils/conversion'

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

const Chord = ({ userKeys, scoreKeys, ...props }) => {
  const { user, score } = useChord(userKeys, scoreKeys)

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
        {!user.chord && <NoteList notes={user.input} />}

        {user.chord && <ChordName root={user.notes[0]} name={user.chord} />}
        {user.chord && <NoteList small notes={user.notes} />}
      </div>

      {userKeys.length > 0 && scoreKeys.length > 0 && (
        <span css={{ margin: '0 8px' }}>/</span>
      )}

      <div css={{ color: 'gray' }}>
        {!score.chord && <NoteList notes={score.input} />}

        {score.chord && <ChordName root={score.notes[0]} name={score.chord} />}
        {score.chord && <NoteList small notes={score.notes} />}
      </div>
    </div>
  )
}

Chord.propTypes = {
  userKeys: arrayOf(number),
  scoreKeys: arrayOf(number)
}

export default Chord
