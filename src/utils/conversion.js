const STEPS = [0, 2, 4, 5, 7, 9, 11]

export function keyToNote(key) {
  const octave = Math.floor((key + 9) / 12)
  const steps = (key + 9) % 12

  for (let i = 0; i < STEPS.length; i++) {
    const step = STEPS[i]
    const value = i + (octave - 4) * 7

    if (steps === step) {
      return { value }
    } else if (steps === step - 1) {
      return { value, accidental: 'b' }
    }
  }
}
