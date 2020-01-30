import React from 'react'
import { number, arrayOf, shape, string, bool } from 'prop-types'

import { WholeNote } from './notes'

function collides(a, b) {
  if (!a || !b) return false
  return Math.abs(b.value - a.value) === 1
}

export const Chord = ({ tick, highlighted, clef, notes }) => {
  const color = highlighted ? 'green' : 'black'

  return (
    <g fill={color} stroke={color}>
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
}

Chord.propTypes = {
  tick: number,
  clef: string,
  highlighted: bool,
  notes: arrayOf(shape(WholeNote.propTypes))
}
