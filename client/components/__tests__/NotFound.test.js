import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import NotFound from '../NotFound'
import { getNotFound } from '../../apis/notFound'

jest.mock('../../apis/notFound')

const notFoundMockData = ['https://coffee.alexflipnote.dev/fake-coffee-mock-image.jpg']

jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('<NotFound />', () => {
  it('displays image from api.', async () => {
    getNotFound.mockReturnValue(Promise.resolve(notFoundMockData))
    expect.assertions(1)
    render(<NotFound />)
    return waitFor(() => getNotFound.mock.calls.length > 0).then(() => {
      console.log(notFoundMockData[0], 'notFoundMockData[0]')
      const image = screen.getByRole('img')
      console.log(image.src, 'image')
      expect(image.src).toContain(notFoundMockData[0])
    })
  })

  it('throws correct error if required api is not provided', async () => {
    getNotFound.mockImplementation(() => Promise.reject(new Error('No Covfefe')))
    expect.assertions(1)
    render(<NotFound />)
    return waitFor(() => getNotFound.mock.calls.length > 0).then(() => {
      expect(console.error).toHaveBeenCalledWith('No Covfefe')
    })
  })
})