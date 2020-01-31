import { useEffect, useState } from 'react'

function addKey(key) {
  return keys => [...keys, key]
}

function removeKey(key) {
  return keys => keys.filter(k => k !== key)
}

function setupMIDIEvents(setKeys) {
  if (!navigator.requestMIDIAccess) return

  function onMIDIMessage({ data }) {
    // ignore sustain and other irrelevant midi signals
    if ([248, 254, 176].includes(data[0])) return

    // shift midi note value to match our keyboard config
    const key = data[1] - 21

    // add or remove key from state
    setKeys(keys => {
      if (data[2] > 0) return addKey(key)(keys)
      else return removeKey(key)(keys)
    })
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

  useEffect(() => {
    setupMIDIEvents(setKeys)
  }, [setKeys])

  return {
    keys,
    addKey: key => setKeys(addKey(key)),
    removeKey: key => setKeys(removeKey(key))
  }
}
