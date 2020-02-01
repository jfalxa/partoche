import React, { Fragment } from 'react'
import { object } from 'prop-types'

import { KEYS, MODES, INTERVALS, INVERSIONS } from '../constants/menu'
import Select from './select'

const shiftValue = shift => option => ({ value: option + shift })
const disableAfter = max => option => ({ disabled: option >= max })

const Menu = ({ app }) => (
  <Fragment>
    <Select // prettier-ignore
      options={KEYS}
      optionProps={shiftValue(-1)}
      value={app.root}
      onChange={app.setRoot}
    />

    <Select // prettier-ignore
      disabled={app.root < 0}
      options={MODES}
      optionProps={shiftValue(-1)}
      value={app.mode}
      onChange={app.setMode}
    />

    <Select
      disabled={app.mode < 0}
      options={INTERVALS}
      optionProps={shiftValue(1)}
      value={app.intervals}
      onChange={app.setIntervals}
    />

    <Select
      disabled={app.intervals < 2}
      options={INVERSIONS}
      optionProps={disableAfter(app.intervals)}
      value={app.inversion}
      onChange={app.setInversion}
    />
  </Fragment>
)

Menu.propTypes = {
  app: object
}

export default Menu
