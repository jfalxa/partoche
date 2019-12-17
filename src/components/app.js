import React, { useState } from 'react'

import { keyToNote } from '../utils/conversion'
import Keyboard from './keyboard'
import { Score, Staff, GClef, WholeNote } from './score'

const App = () => {
  const [keys, setKeys] = useState([])

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Score css={{ margin: 'auto' }}>
        <Staff>
          <GClef />
          {keys.map((key, i) => (
            <WholeNote key={key} tick={i} {...keyToNote(key)} />
          ))}
        </Staff>
      </Score>

      <Keyboard
        value={keys}
        onChange={setKeys}
        css={{ width: '100%', height: '20%' }}
      />
    </div>
  )
}

export default App
