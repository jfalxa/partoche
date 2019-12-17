const Line = ({ level, ...props }) => {
  const y = Line.offset + level * Line.space

  return (
    <line
      x1="0"
      x2="100%"
      y1={y}
      y2={y}
      stroke="black"
      strokeWidth="1px"
      shapeRendering="crispEdges"
      {...props}
    />
  )
}

Line.offset = 0.5
Line.space = 6

export const Ledger = props => {
  return <Line x1="-1.5" x2="11.5" {...props} />
}

Ledger.list = value => {
  if (value <= 0) {
    const size = Math.floor(-value / 2) + 1
    return [...Array(size).keys()].map(i => i + 5)
  } else if (value >= 12) {
    const size = Math.floor((value - 12) / 2) + 1
    return [...Array(size).keys()].map(i => -(i + 1))
  } else {
    return []
  }
}

export const Staff = ({ line = 0, children, ...props }) => {
  const dy = Staff.offset + line * Staff.size

  return (
    <g transform={`translate(0 ${dy})`} {...props}>
      <Line level={0} />
      <Line level={1} />
      <Line level={2} />
      <Line level={3} />
      <Line level={4} />
      {children}
    </g>
  )
}

Staff.offset = 18
Staff.size = 50
