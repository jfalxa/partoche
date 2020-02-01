import React from 'react'
import { number, func, arrayOf, string } from 'prop-types'

const Select = ({
  options,
  value,
  optionProps = () => null,
  onChange,
  ...props
}) => (
  <select
    {...props}
    value={value}
    onChange={e => onChange(parseInt(e.target.value, 10))}
    css={{ fontFamily: 'monospace' }}
  >
    {options.map((label, value) => (
      <option key={value} value={value} {...optionProps(parseInt(value, 10))}>
        {label}
      </option>
    ))}
  </select>
)

Select.propTypes = {
  value: number,
  onChange: func,
  optionProps: func,
  options: arrayOf(string)
}

export default Select
