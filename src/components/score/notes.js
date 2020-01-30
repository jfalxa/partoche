import React from 'react'
import { bool, number, string } from 'prop-types'

import { Ledger } from './ledger'
import { Flat, Sharp } from './accidentals'

export const WholeNote = ({
  value = 0,
  tick = 0,
  clef = 'g',
  accidental,
  alt = false
}) => {
  const dx =
    WholeNote.offsetX +
    tick * 3 * WholeNote.width +
    (alt ? WholeNote.width - 4 : 0)

  // on g, dy = 0 for value = 37 (E5)
  // on f, dy = 0 for value = 25 (G3)
  const y0 = clef === 'g' ? 37 : 25
  const dy = (y0 - value) * (WholeNote.height / 2)

  return (
    <g transform={`translate(${dx} 0)`}>
      <g transform={`translate(0 ${dy})`}>
        {accidental === 'b' && <Flat />}
        {accidental === '#' && <Sharp />}
        <path
          d="M3.789 8.444C1.673 7.801 0 6.06 0 4.494c0-4.436 9.68-6.188 13.677-2.48C18 6.027 10.947 10.61 3.79 8.445zm6.457-1.116c1.177-1.767.046-5.272-1.992-6.187-3-1.336-4.83.946-3.58 4.465.86 2.437 4.372 3.52 5.572 1.722z"
          stroke="none"
        />
      </g>

      {Ledger.list(value, clef).map(level => (
        <Ledger key={level} level={level} />
      ))}
    </g>
  )
}

WholeNote.offsetX = 48
WholeNote.width = 15
WholeNote.height = 9

WholeNote.propTypes = {
  value: number,
  tick: number,
  accidental: string,
  clef: string,
  alt: bool
}
