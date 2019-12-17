import { useEffect, useState } from 'react'

function setupMIDIEvents(addKey, removeKey) {
  function onMIDIMessage({ data }) {
    // ignore sustain and other irrelevant midi signals
    if ([248, 254, 176].includes(data[0])) return

    // shift midi note value to match our keyboard config
    const key = data[1] - 21

    if (data[2] > 0) {
      addKey(key)
    } else {
      removeKey(key)
    }
  }

  return navigator.requestMIDIAccess().then(midi => {
    for (const input of midi.inputs.values()) {
      input.onmidimessage = onMIDIMessage
    }
  })
}

export default function useKeyboard(state, setState) {
  const [local, setLocal] = useState([])

  const keys = state || local
  const setKeys = setState || setLocal

  const addKey = key => setKeys(keys => [...keys, key])
  const removeKey = key => setKeys(keys => keys.filter(k => k !== key))

  useEffect(() => {
    setupMIDIEvents(addKey, removeKey)
  }, [])

  return { keys, addKey, removeKey }
}
