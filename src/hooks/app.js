import { useState, useEffect } from 'react'
import scale from '../music/scales'

export default function useApp() {
  const [keys, setKeys] = useState([])
  const [mode, setMode] = useState(-1)
  const [chord, setChord] = useState(1)

  useEffect(() => {
    setKeys(k => {
      if (mode < 0) return k.slice(0, 1)
      else if (k.length > 0) return scale(k[0], mode)
      else return k
    })
  }, [mode])

  return { keys, mode, chord, setKeys, setMode, setChord }
}
