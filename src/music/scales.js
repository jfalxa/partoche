export const MODES = [
  '\xA0\xA0I. Ionian',
  '\xA0II. Dorian',
  'III. Phrygian',
  '\xA0IV. Lydian',
  '\xA0\xA0V. Mixolydian',
  '\xA0VI. Aeolian',
  'VII. Locrian'
]

const NOTES = [0, 1, 2, 3, 4, 5, 6]
const MAJOR = [0, 2, 4, 5, 7, 9, 11]

export const MODE_SCALES = NOTES.map(i => {
  const left = MAJOR.slice(i)
  const right = MAJOR.slice(0, i)

  // prettier-ignore
  return [
    ...left.map(n => n - left[0]), 
    ...right.map(n => n - left[0] + 12),
    12
  ]
})

export default function scale(root, mode) {
  return MODE_SCALES[mode].map(degree => root + degree)
}
