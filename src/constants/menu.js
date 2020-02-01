import { noteToString } from '../utils/conversion'
import keys from './keys'

// prettier-ignore
export const KEYS = [
  '- No root',
  ...keys.map(k => '- ' + noteToString(k, true))
]

export const MODES = [
  '- No mode',
  '- Ionian\xA0\xA0\xA0\xA0\xA0(I)',
  '- Dorian\xA0\xA0\xA0\xA0\xA0(II)',
  '- Phrygian\xA0\xA0\xA0(III)',
  '- Lydian\xA0\xA0\xA0\xA0\xA0(IV)',
  '- Mixolydian\xA0(V)',
  '- Aeolian\xA0\xA0\xA0\xA0(VI)',
  '- Locrian\xA0\xA0\xA0\xA0(VII)'
]

export const INTERVALS = [
  '- No chord',
  '- 2 note chord',
  '- 3 note chord',
  '- 4 note chord'
]

export const INVERSIONS = [
  '- No inversion',
  '- 1st inversion',
  '- 2nd inversion',
  '- 3rd inversion'
]
