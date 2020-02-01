import CHORDS from '../constants/chords'
import { unique, permute } from '../utils/helpers'

function getNotePermutations(notes) {
  return permute(unique(notes, note => note.steps), 4) // prettier-ignore
}

function findChord(notes) {
  const root = notes[0].steps

  // describe the progression of notes in terms of intervals from the root
  const intervals = notes.map(n => n.steps - root + (n.steps < root ? 12 : 0))

  // find if the intervals match a type of chord
  const chord = CHORDS[intervals.join()]

  return chord ? [chord, notes] : null
}

export function computeChord(notes) {
  const chords = getNotePermutations(notes)
    .map(findChord)
    .filter(Boolean)

  return chords[0] || []
}

export function invertChord(chord, inversion) {
  const left = chord.slice(inversion)
  const right = chord.slice(0, inversion).map(steps => steps + 12)

  return [...left, ...right]
}
