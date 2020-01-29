import React from 'react'
import useKeyboard from '../hooks/keyboard'
import { number, bool, arrayOf, func } from 'prop-types'

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
      borderRight: 'none',
      width: '100%',
      height: '20%'
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

const Key = ({ value, pressed, highlighted, ...props }) => {
  const KeyType = isBlack(value) ? BlackKey : WhiteKey
  return (
    <KeyType
      {...props}
      style={{
        background: pressed ? 'green' : highlighted ? 'gray' : null
      }}
    />
  )
}

Key.propTypes = {
  value: number,
  pressed: bool,
  highlighted: bool
}

// 0..87
const KEYS = [...Array(88).keys()]

const Keyboard = ({ value, highlighted, onChange, ...props }) => {
  const keyboard = useKeyboard(value, onChange)

  return (
    <Board {...props}>
      {KEYS.map(key => (
        <Key
          key={key}
          value={key}
          pressed={keyboard.keys.includes(key)}
          highlighted={highlighted.includes(key)}
          onPointerDown={() => keyboard.addKey(key)}
          onPointerUp={() => keyboard.removeKey(key)}
        />
      ))}
    </Board>
  )
}

Keyboard.propTypes = {
  value: arrayOf(number),
  highlighted: arrayOf(number),
  onChange: func
}

Keyboard.defaultProps = {
  highlighted: []
}

export default Keyboard
