const NOTES = [0, 1, 2, 3, 4, 5, 6]
const MAJOR = [1, 1, 1 / 2, 1, 1, 1, 1 / 2]

export const MODES = NOTES.map(i => [...MAJOR.slice(i), ...MAJOR.slice(0, i)])

export default function scale(root, mode) {
  // stack the tone/half-tone progression successively on top of the root note
  // and finally get the list of all the actual notes of the wanted scale
  return MODES[mode].reduce((s, step, i) => [...s, s[i] + step * 2], [root])
}
