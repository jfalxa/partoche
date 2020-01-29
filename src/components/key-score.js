import React from 'react'
import { number, arrayOf } from 'prop-types'

import { keyToNote } from '../utils/conversion'
import { Score, Staff, GClef, Chord } from './score'

const KeyScore = ({ chords }) => (
  <Score css={{ margin: 'auto' }}>
    <Staff>
      <GClef />
      {chords.map((chord, i) => (
        <Chord key={i} tick={i} notes={chord.map(keyToNote)} />
      ))}
    </Staff>
  </Score>
)

KeyScore.propTypes = {
  chords: arrayOf(arrayOf(number))
}

export default KeyScore
