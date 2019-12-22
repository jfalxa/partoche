import React from 'react'
import { WholeNote } from './notes'
import { number, arrayOf } from 'prop-types'

function collides(a, b) {
  if (!a || !b) return false
  return Math.abs(b.value - a.value) === 1
}

export const Chord = ({ tick, notes }) => (
  <g>
    {notes.map((note, i) => (
      <WholeNote
        key={i}
        tick={tick}
        alt={collides(notes[i - 1], note)}
        value={note.value}
        accidental={note.accidental}
      />
    ))}
  </g>
)

Chord.propTypes = {
  tick: number,
  notes: arrayOf(WholeNote.propTypes)
}
