import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Beans from '../Beans'

const resultContentMockData = [
  {
    id: 1002,
    roaster_id: 3,
    region: 'Papua New Guinea | Honduras | Ethiopia | Sumatra',
    process: 'Washed',
    roast_degree: 'value',
    flavour_profile: 'Forest fruit | Cacao',
    beanName: 'Aotea blend',
  },
]

jest.mock('../../actions/beans')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { beans: resultContentMockData }
  }),
}

describe('<Beans />', () => {
  it('Displays list of Beans from Redux State', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Beans />
        </BrowserRouter>
      </Provider>
    )

    const roasterName = screen.getAllByText(resultContentMockData[0].beanName) // uses actual value
    expect(roasterName[0]).toBeInTheDocument()
  })
})
