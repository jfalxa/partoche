import React from 'react'

import { Line } from './staff'
import { range } from '../../utils/helpers'

export const Ledger = props => {
  return <Line x1="-2" x2="17" {...props} />
}

// calculate the distance between the given note and min/max
function countLedgers(value, min, max) {
  // lower keys
  if (value < min) {
    const count = Math.ceil((min - value) / 2)
    return range(count).map(i => i + 5)
  }

  // higher keys
  if (value > max) {
    const count = Math.ceil((value - max) / 2)
    return range(count).map(i => -(i + 1))
  }

  return []
}

Ledger.list = (value, clef) => {
  return clef === 'g'
    ? countLedgers(value, 29, 39) // min = D4, max = G5
    : countLedgers(value, 17, 27) // min = F2, max = B3
}
