import React from 'react'
import { number, arrayOf } from 'prop-types'

import { keyToNote } from '../utils/conversion'
import { listChords } from '../music/chords'

import { Score, Staff, GClef, Chord } from './score'

const KeyScore = ({ keys, chord }) => {
  const chords = listChords(keys, chord).map(key => key.map(keyToNote))

  return (
    <Score css={{ margin: 'auto' }}>
      <Staff>
        <GClef />
        {chords.map((chord, i) => (
          <Chord key={i} tick={i} notes={chord} />
        ))}
      </Staff>
    </Score>
  )
}

KeyScore.propTypes = {
  keys: arrayOf(number),
  chord: number
}

export default KeyScore
