import { Ledger } from './staff'
import { Flat, Sharp } from './accidentals'

export const WholeNote = ({ value = 0, tick = 0, accidental, alt = false }) => {
  const dx =
    WholeNote.offsetX +
    tick * 2.5 * WholeNote.width +
    (alt ? WholeNote.width - 2 : 0)

  const dy = 0.5 + (WholeNote.offsetY - value) * (WholeNote.height / 2)

  return (
    <g transform={`translate(${dx} 0)`}>
      <g transform={`translate(0 ${dy})`}>
        {accidental === 'b' && <Flat />}
        {accidental === '#' && <Sharp />}
        <path
          d="m2.572214,5.620131c-1.383754,-0.425896 -2.47555,-1.583257 -2.47555,-2.624211c0,-2.946336 6.328451,-4.11228 8.941933,-1.647449c2.826166,2.665417 -1.786012,5.712197 -6.466382,4.27166zm4.221099,-0.740169c0.769934,-1.175067 0.033815,-3.503213 -1.299776,-4.110838c-1.958424,-0.892316 -3.158868,0.628287 -2.343195,2.968131c0.564183,1.618416 2.859518,2.338407 3.64297,1.142707z"
          fill="#000000"
        />
      </g>

      {Ledger.list(value).map(level => (
        <Ledger key={level} level={level} />
      ))}
    </g>
  )
}

WholeNote.offsetX = 36
WholeNote.offsetY = 9
WholeNote.width = 10
WholeNote.height = 6
