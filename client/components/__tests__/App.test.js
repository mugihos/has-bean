import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from '../App'
import store from '../../store'
import { fetchRoasters } from '../../actions/roasters'

jest.mock('../actions')

fetchRoasters.mockImplementation(() => () => {})

test('page header includes roaster', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/roasters/)
})

test('renders an <li> for each roaster', () => {
  const roasters = ['roaster1', 'roaster2', 'roaster3']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ roasters }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchRoasters action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchRoasters).toHaveBeenCalled()
})
