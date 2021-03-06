import React from 'react'
import { number, arrayOf } from 'prop-types'

import { Score, Staff, GClef, FClef, Chord } from './score'

// check on which staff it should be more appropriate to display the full progression
// (G3b being the current threshold)
function shouldBeG(chords) {
  const root = chords[0] && chords[0][0]
  return root > 32
}

const ScorePreview = ({ tick, keys, score }) => (
  <Score width="400" height="280" css={{ margin: 'auto' }}>
    <Staff y={88}>
      <GClef />
      {shouldBeG(score) &&
        score.map((chord, i) => (
          <Chord
            key={i}
            clef="g"
            tick={i}
            highlighted={tick === i}
            keys={chord}
          />
        ))}

      {shouldBeG([keys]) && <Chord pressed clef="g" tick={tick} keys={keys} />}
    </Staff>

    <Staff y={178}>
      <FClef />
      {!shouldBeG(score) &&
        score.map((chord, i) => (
          <Chord
            key={i}
            clef="f"
            tick={i}
            highlighted={tick === i}
            keys={chord}
          />
        ))}

      {!shouldBeG([keys]) && <Chord pressed clef="f" tick={tick} keys={keys} />}
    </Staff>
  </Score>
)

ScorePreview.propTypes = {
  tick: number,
  keys: arrayOf(number),
  score: arrayOf(arrayOf(number))
}

export default ScorePreview
