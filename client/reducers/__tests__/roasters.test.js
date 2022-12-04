import { SET_ROASTERS, ADD_ROASTER } from '../../actions/roasters'
import roasters from '../roasters'

const fakeGetData = [
  {
    id: 1,
    name: 'Coffee Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    url: 'https://coffeesupreme.com/',
    image_url: 'https://tinyurl.com/3afx7e7m',
  },
  {
    id: 2,
    name: 'Allpress Espresso',
    location: 'Auckland',
    details:
      'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
    url: 'https://www.allpressespresso.com/',
    image_url: 'https://tinyurl.com/3e73p5we',
  },
]

describe('roaster reducer', () => {
  it('return the action for type SET_ROASTER', () => {
    expect.assertions(1)
    const action = {
      type: SET_ROASTERS,
      payload: fakeGetData,
    }
    const initialState = []
    const expectedState = fakeGetData
    const outputState = roasters(initialState, action)

    expect(outputState).toEqual(expectedState)
  })
  it('returns default initial state for an undefined state and no action type', () => {
    const expectedState = []
    const outputState = roasters(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
