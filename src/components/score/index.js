import React from 'react'

export * from './accidentals'
export * from './notes'
export * from './staff'
export * from './clefs'
export * from './chords'

export const Score = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  />
)
