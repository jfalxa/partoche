import React from 'react'

import useApp from '../hooks/app'

import Menu from './menu'
import ScorePreview from './score-preview'
import Chord from './chord'
import Buttons from './buttons'
import Keyboard from './keyboard'

const Container = props => (
  <div
    {...props}
    css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh'
    }}
  />
)

const App = () => {
  const app = useApp()

  return (
    <Container>
      <Menu app={app} />

      <ScorePreview tick={app.tick} keys={app.keys} score={app.score} />

      <Chord userKeys={app.keys} scoreKeys={app.score[app.tick]} />

      <Buttons app={app} />

      <Keyboard
        value={app.keys}
        highlighted={app.score[app.tick]}
        onChange={app.setKeys}
      />
    </Container>
  )
}

export default App
