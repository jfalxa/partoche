import React, { Fragment } from 'react'
import { object } from 'prop-types'

const Buttons = ({ app }) => (
  <Fragment>
    <button disabled={app.score.length <= 1} onClick={app.togglePlaying}>
      {app.playing ? 'Stop' : 'Play'}
    </button>

    <button disabled={app.score.length === 0} onClick={app.clear}>
      Clear
    </button>
  </Fragment>
)

Buttons.propTypes = {
  app: object
}

export default Buttons
