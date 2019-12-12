import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/components/app'

test('should render some text', () => {
  const result = render(<App />)
  const text = result.queryByText('HALLO')

  expect(text.tagName).toBe('H1')
  expect(text.innerHTML).toBe('HALLO')
})
