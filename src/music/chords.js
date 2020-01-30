import CHORDS from './intervals'

function getIntervals(keys) {
  return keys.map(k => k.key - keys[0].key).sort((a, b) => a - b)
}

function findChord(intervals) {
  const target = intervals.join('-')
  return Object.keys(CHORDS).find(chord => CHORDS[chord].join('-') === target)
}

export function computeChord(keys) {
  if (keys.length < 3) return ''

  const intervals = getIntervals(keys)
  const chord = findChord(intervals) || ''

  return keys[0].note + chord
}

export function stringifyNotes(keys) {
  return keys.map(k => `${k.note}${k.accidental || ''}`).join('-')
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
