import React from 'react'
import { number, arrayOf, shape, string } from 'prop-types'

import { WholeNote } from './notes'

function collides(a, b) {
  if (!a || !b) return false
  return Math.abs(b.value - a.value) === 1
}

export const Chord = ({ tick, clef, notes }) => (
  <g>
    {notes.map((note, i) => (
      <WholeNote
        key={i}
        tick={tick}
        alt={collides(notes[i - 1], note)}
        value={note.value}
        clef={clef}
        accidental={note.accidental}
      />
    ))}
  </g>
)

Chord.propTypes = {
  tick: number,
  clef: string,
  notes: arrayOf(shape(WholeNote.propTypes))
}
