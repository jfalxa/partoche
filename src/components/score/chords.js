import React from 'react'
import { number, arrayOf, string, bool } from 'prop-types'

import { keyToNote } from '../../utils/conversion'
import { WholeNote } from './notes'

function collides(a, b) {
  if (!a || !b) return false
  return Math.abs(b.value - a.value) === 1
}

export const Chord = ({ tick, pressed, highlighted, clef, keys }) => {
  const notes = keys.map(keyToNote)
  const color = pressed ? 'limegreen' : highlighted ? 'gray' : 'black'

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
  pressed: bool,
  highlighted: bool,
  keys: arrayOf(number)
}
