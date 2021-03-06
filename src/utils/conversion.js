const STEPS = [0, 2, 4, 5, 7, 9, 11]
const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

// convert a piano key number to a more detailed object,
// value being the flat note index starting from C0
export function keyToNote(key) {
  const octave = Math.floor((key + 9) / 12)
  const steps = (key + 9) % 12

  // loop through the different steps of the scale
  // to find out which note matches the given key
  for (let i = 0; i < STEPS.length; i++) {
    const step = STEPS[i]
    const note = NOTES[i]
    const value = i + octave * 7

    const data = { key, value, note, steps, octave }

    if (steps === step) {
      return data
    } else if (steps === step - 1) {
      data.accidental = 'b'
      return data
    }
  }
}

export function noteToString(data, showOctave = false) {
  return data.note + (data.accidental || '') + (showOctave ? data.octave : '')
}
