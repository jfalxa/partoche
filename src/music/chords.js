import CHORDS from './intervals'
import { unique, permute } from '../utils/helpers'

function getNotePermutations(notes) {
  return permute(unique(notes, note => note.steps))
}

function findChord(notes) {
  const root = notes[0].steps

  // describe the progression of notes in terms of intervals from the root
  const intervals = notes.map(n => n.steps - root + (n.steps < root ? 12 : 0))

  // find if the intervals match a type of chord
  const target = intervals.join('-')
  const chord = Object.keys(CHORDS).find(c => CHORDS[c].join('-') === target)

  return chord ? [chord, notes] : null
}

export function computeChord(notes) {
  return getNotePermutations(notes).map(findChord).filter(Boolean).pop() || [] // prettier-ignore
}

export function listChords(scale, intervals = 0) {
  return scale.map((root, degree) => {
    const chord = [root]

    for (let i = 1; i < intervals; i++) {
      const index = degree + i * 2

      const note =
        index > 7 // note is in next scale
          ? scale[index % 7] + 12
          : scale[index]

      chord.push(note)
    }

    return chord
  })
}
