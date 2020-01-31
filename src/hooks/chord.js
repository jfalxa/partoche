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
  let start = performance.now()

  const user = useComputeChord(userKeys)
  const score = useComputeChord(scoreKeys)

  let end = performance.now()
  console.log(end - start + 'ms')

  return { user, score }
}
