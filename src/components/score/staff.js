const Line = ({ level, ...props }) => {
  const y = Line.offset + level * Line.space

  return (
    <line
      {...props}
      x1="0"
      y1={y}
      x2="100%"
      y2={y}
      stroke="black"
      strokeWidth="1px"
      shapeRendering="crispEdges"
    />
  )
}

Line.offset = 0.5
Line.space = 6

export const Staff = ({ line = 0, children, ...props }) => {
  const dy = Staff.offset + line * Staff.size

  return (
    <g {...props} transform={`translate(0 ${dy})`}>
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
