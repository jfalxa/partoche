import { invertChord } from './chords'

const NOTES = [0, 1, 2, 3, 4, 5, 6]
const MAJOR = [1, 1, 1 / 2, 1, 1, 1, 1 / 2]

export const MODES = NOTES.map(i => [...MAJOR.slice(i), ...MAJOR.slice(0, i)])

export function scale(root, mode) {
  // stack the tone/half-tone progression successively on top of the root note
  // that way get the list of all the actual notes of the wanted scale
  return MODES[mode].reduce((s, step, i) => [...s, s[i] + step * 2], [root])
}

export function listScaleChords(scale, intervals, inversion) {
  return scale.map((root, degree) => {
    const chord = [root]

    for (let i = 1; i < intervals; i++) {
      const index = degree + i * 2

      const note =
        index > 7 // note is in next octave
          ? scale[index % 7] + 12
          : scale[index]

      chord.push(note)
    }

    return invertChord(chord, inversion)
  })
}

// remove keys that cannot be played on a piano
export function limitKeys(chords) {
  return chords
    .map(chord => chord.filter(key => key < 88))
    .filter(chord => chord.length > 0)
}
