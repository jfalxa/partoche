import React from 'react'
import { number, any } from 'prop-types'

export const Line = ({ level, ...props }) => {
  const y = level * Line.space

  return (
    <line
      x1="0"
      x2="100%"
      y1={y}
      y2={y}
      strokeWidth="0.5px"
      shapeRendering="crispEdges"
      {...props}
    />
  )
}

Line.space = 9

Line.propTypes = {
  level: number
}

export const Staff = ({ y = 0, children, ...props }) => (
  <g transform={`translate(0 ${y})`} {...props}>
    <g stroke="black">
      <Line level={0} />
      <Line level={1} />
      <Line level={2} />
      <Line level={3} />
      <Line level={4} />
    </g>
    {children}
  </g>
)

Staff.propTypes = {
  y: number,
  children: any
}
