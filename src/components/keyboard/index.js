import React from 'react'
import useKeyboard from './hook'

const BLACKS = [1, 3, 6, 8, 10]

function isBlack(key) {
  return BLACKS.includes((9 + key) % 12)
}

const Board = props => (
  <div
    {...props}
    css={{
      display: 'flex',
      border: '1px solid black',
      borderRight: 'none'
    }}
  />
)

const BlackKey = props => (
  <div
    {...props}
    css={{
      background: 'black',
      width: '1.28%',
      height: '75%',
      border: '1px solid black',
      borderTop: 'none',
      margin: '0 -0.64%',
      zIndex: 1
    }}
  />
)

const WhiteKey = props => (
  <div
    {...props}
    css={{
      background: 'white',
      flex: 1,
      borderRight: '1px solid black'
    }}
  />
)

const Key = ({ value, pressed, ...props }) => {
  const KeyType = isBlack(value) ? BlackKey : WhiteKey
  return <KeyType {...props} style={{ background: pressed ? 'gray' : null }} />
}

// 0..87
const KEYS = [...Array(88).keys()]

const Keyboard = ({ value, onChange, ...props }) => {
  const keyboard = useKeyboard(value, onChange)

  return (
    <Board {...props}>
      {KEYS.map(key => (
        <Key
          key={key}
          value={key}
          pressed={keyboard.keys.includes(key)}
          onPointerDown={() => keyboard.addKey(key)}
          onPointerUp={() => keyboard.removeKey(key)}
        />
      ))}
    </Board>
  )
}

export default Keyboard