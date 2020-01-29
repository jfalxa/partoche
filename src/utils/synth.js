const F0 = 27.5
const GAIN_DELAY = 0.01

function keyToFreq(key) {
  const fn = F0 * 2 ** (key / 12)
  return Math.round(fn * 100) / 100
}

function createSynth() {
  const ctx = new AudioContext()
  const channels = Array(88)

  function startOscillator(key, gain) {
    const osc = channels[key] || ctx.createOscillator()
    const time = ctx.currentTime

    if (!channels[key]) {
      const vol = ctx.createGain()

      osc.vol = vol
      osc.type = 'sine'
      osc.frequency.value = keyToFreq(key)
      vol.gain.setValueAtTime(0, ctx.currentTime)

      osc.connect(vol)
      vol.connect(ctx.destination)

      osc.start()
    }

    osc.vol.gain.setTargetAtTime(gain, time, GAIN_DELAY)

    return osc
  }

  function stopOscillator(key) {
    const osc = channels[key]
    const time = ctx.currentTime

    delete channels[key]

    osc.vol.gain.setTargetAtTime(0, time, GAIN_DELAY)
    osc.stop(time + GAIN_DELAY + 0.1)

    osc.onended = () => osc.disconnect()
  }

  return function play(keys = []) {
    const gain = 0.5 / keys.length

    // silence unused channels
    channels.forEach((_, key) => {
      if (!keys.includes(key)) {
        stopOscillator(key)
      }
    })

    // balance played channels
    keys.forEach(key => {
      channels[key] = startOscillator(key, gain)
    })
  }
}

export default createSynth
