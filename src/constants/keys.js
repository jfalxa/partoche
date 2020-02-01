import { keyToNote } from '../utils/conversion'

export const BLACKS = [1, 3, 6, 8, 10]

export default [...Array(88).keys()].map(keyToNote)
