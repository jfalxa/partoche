import { useState, useEffect, useMemo, useRef } from 'react'

import createSynth from '../utils/synth'
import { scale, listScaleChords, limitKeys } from '../music/scales'

const play = createSynth()

function useScore(root, mode, intervals, inversion) {
  return useMemo(() => {
    if (root < 0) return []
    if (mode < 0) return [[root]]

    const keys = scale(root, mode)
    const chords = listScaleChords(keys, intervals, inversion)
    const score = limitKeys(chords)

    return score
  }, [root, mode, intervals, inversion])
}

function useTickProgression(keys, score, setTick) {
  const direction = useRef(1)
  const lastScore = useRef(score)

  useEffect(() => {
    setTick(tick => {
      // reset the tick if the score is unset or changes
      if (score.length === 0 || lastScore.current !== score) {
        lastScore.current = score
        return 0
      }

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
  const [inversion, setInversion] = useState(0)

  const [tick, setTick] = useState(0)
  const [playing, setPlaying] = useState(false)

  // reset mode when root is unset
  if (root < 0 && mode >= 0) setMode(-1)

  // reset intervals when mode is unset
  if (mode < 0 && intervals > 1) setIntervals(1)

  // adjust inversion according to the current intervals
  if (inversion >= intervals) setInversion(intervals - 1)

  // stop playing if root is unset
  if (root < 0 && playing) setPlaying(false)

  // set the pressed key as root if not playing
  if (!playing && keys.length === 1 && keys[0] !== root) {
    setRoot(keys[0])
  }

  const score = useScore(root, mode, intervals, inversion)

  useTickProgression(keys, score, setTick)
  useSynth(playing, score, tick)

  function clear() {
    setKeys([])
    setRoot(-1)
  }

  function togglePlaying() {
    setPlaying(!playing)
  }

  return {
    keys,
    root,
    mode,
    intervals,
    inversion,
    score,
    tick,
    playing,
    clear,
    setKeys,
    setRoot,
    setMode,
    setIntervals,
    setInversion,
    setTick,
    togglePlaying
  }
}
