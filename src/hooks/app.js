import { useState, useEffect, useMemo, useRef } from 'react'

import createSynth from '../utils/synth'
import scale from '../music/scales'
import { listChords } from '../music/chords'

const play = createSynth()

function useScore(root, mode, intervals) {
  return useMemo(() => {
    if (root < 0) return []
    if (mode < 0) return [[root]]

    return listChords(scale(root, mode), intervals)
  }, [root, mode, intervals])
}

function useTickProgression(keys, score, setTick) {
  const direction = useRef(1)

  useEffect(() => {
    setTick(tick => {
      if (score.length === 0) return 0

      const pressedKeys = [...keys].sort().join()
      const expectedKeys = score[tick].sort().join()

      if (tick === score.length - 1) direction.current = -1
      else if (tick === 0) direction.current = +1

      return pressedKeys === expectedKeys
        ? (tick + direction.current) % score.length
        : tick
    })
  }, [keys, score, setTick])
}

function useSynth(playing, score, tick) {
  useEffect(() => {
    play(playing ? score[tick] : [])
  }, [playing, score, tick])
}

export default function useApp() {
  const [keys, setKeys] = useState([])

  const [root, setRoot] = useState(-1)
  const [mode, setMode] = useState(-1)
  const [intervals, setIntervals] = useState(1)

  const [tick, setTick] = useState(0)
  const [playing, setPlaying] = useState(false)

  // reset mode when root is unset
  if (root < 0 && mode >= 0) setMode(-1)

  // reset intervals when mode is not set
  if (mode < 0 && intervals > 1) setIntervals(1)

  // stop playing if root is unset
  if (root < 0 && playing) setPlaying(false)

  // reset tick if playing stops
  if (!playing && tick > 0) setTick(0)

  // set the pressed key as root if not playing
  if (!playing && keys.length === 1 && Math.min(keys[0], 75) !== root) {
    setRoot(Math.min(keys[0], 75))
  }

  const score = useScore(root, mode, intervals)

  useTickProgression(keys, score, setTick)
  useSynth(playing, score, tick)

  function reset() {
    setRoot(-1)
    setMode(-1)
    setIntervals(1)
  }

  return {
    keys,
    root,
    mode,
    intervals,
    score,
    tick,
    playing,
    reset,
    setKeys,
    setRoot,
    setMode,
    setIntervals,
    setTick,
    setPlaying
  }
}
