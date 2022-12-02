import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react'
import Home from '../Home'
import { Provider } from 'react-redux'
import store from '../../store'
import nock from 'nock'
import Map, { Marker } from 'react-map-gl'

jest.mock('react-map-gl')

describe('<Home />', () => {
  it('testing Map', () => {
    Map.mockImplementation((props) => {
      return <>{props.children}</>
    })
    Marker.mockImplementation((props) => {
      return <>{props.children}</>
    })
    expect.assertions(2)
    nock.disableNetConnect()
    nock.recorder.rec()
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const icons = screen.getAllByRole('img')
    const map = screen.getByRole('region')
    expect(icons).toHaveLength(2)
    expect(map).toBeTruthy()
  })
  it.skip('click of icon', () => {
    expect.assertions(1)
    userEvent.click(screen.getAllByRole('img')[0])
    expect(console.log).toHaveBeenCalled()
  })
})
