import { useMemo } from 'react'

import { keyToNote } from '../utils/conversion'
import { computeChord } from '../music/chords'

function useComputeChord(keys) {
  return useMemo(() => {
    if (!keys) return { input: [] }

    const input = keys.map(keyToNote)
    const [chord, notes] = computeChord(input)

    return { input, chord, notes }
  }, [keys])
}

export default function useChord(userKeys, scoreKeys) {
  const user = useComputeChord(userKeys)
  const score = useComputeChord(scoreKeys)

  return { user, score }
}
