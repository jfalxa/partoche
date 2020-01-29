import React from 'react'
import { number, bool, func } from 'prop-types'

const PlayButton = ({ tick, playing, setPlaying, ...props }) => (
  <button {...props} onClick={() => setPlaying(!playing)}>
    {playing ? `Stop (${tick + 1})` : 'Play'}
  </button>
)

PlayButton.propTypes = {
  tick: number,
  playing: bool,
  setPlaying: func
}

export default PlayButton
