import React from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Roaster from '../Roaster'

const roastersData = [
  {
    id: 1,
    name: 'Supreme',
    location: 'Wellington, Auckland, Christchurch',
    details:
      "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
  },
  {
    id: 2,
    name: 'Allpress',
    location: 'Auckland',
    details:
      'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
  },
  {
    id: 3,
    name: 'Kokako',
    location: 'Auckland',
    details:
      "It all started in the late 90s when our founders, Helen and Christian, had this wild idea to be New Zealand's first organic coffee roasters.",
  },
]

const cafeData = [
  {
    id: 1,
    name: 'Thunderbird Cafe',
    address: '154 Featherston Street, CBD, Wellington 6011',
    city: 'Wellington',
    roaster_id: 1,
    lat: '-41.2835619',
    lng: '174.7766539',
  },
  {
    id: 2,
    name: 'Meshino',
    address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
    city: 'Christchurch',
    roaster_id: 2,
    lat: '-43.50606418686944',
    lng: '172.62842349325345',
  },
  {
    id: 3,
    name: 'Shore Road Cafe',
    address: '13 Shore Road, Remuera, Auckland, 1050',
    city: 'Auckland',
    roaster_id: 2,
    lat: '-36.86518025285166',
    lng: '174.78895079325343',
  },
]

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { roasters: roastersData, searchRoasters: [], cafe: cafeData }
  }),
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/Roaster', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={fakeStore}>
        <MemoryRouter initialEntries={['/roasters/1']}>
          <Routes>
            <Route path="/roasters/:id" element={<Roaster />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByText(/Roastery location:/i)).toBeInTheDocument()
  })
  // it('displays the roaster name, details', () => {
  //   const heading = screen.getByRole('heading')
  //   render(
  //     <Provider store={fakeStore}>
  //       <MemoryRouter initialEntries={['/roasters/1']}>
  //         <Routes>
  //           <Route path="/roasters/:id" element={<Roaster />}></Route>
  //         </Routes>
  //       </MemoryRouter>
  //     </Provider>
  //   )
  //     console.log(heading)
  //     expect(heading).toContain(roastersData.name)
  // })
  // it('filters and displays cafes correctly', () => {})
})

// REFACTORING OPTIONS FROM ROH
// function AppProvider({ children }) {
//   return (
//     <Provider store={fakeStore}>
//       <MemoryRouter initialEntries={['/roasters/1']}>
//         <Routes>{children}</Routes>
//       </MemoryRouter>
//     </Provider>
//   )
// }

// describe('<AddSighting />', () => {
//   it('renders without crashing', () => {
//     render(
//         <Route path="/roasters/:id" element={<Roaster />} />,
//       { wrapper: AppProvider }
//     )

//     expect(screen.getByText(/I SAW A BAT/i)).toBeInTheDocument()
//   })
// })

//REFACTORING OPT 2 - REUSABLE

// function AppProvider({ children, initialEntries = ['/'], store = fakeStore }) {
//   return (
//     <Provider store={store}>
//       <MemoryRouter initialEntries={initialEntries}>
//         <Routes>
//           <Route path="/roasters/:id" element={children} />
//         </Routes>
//       </MemoryRouter>
//     </Provider>
//   )
// }

// describe('<AddSighting />', () => {
//   it('renders without crashing', () => {
//     render(<Roaster />, {
//       wrapper: (
//         <AppProvider initialEntries={['/roasters/1']} path="/roasters/:id" />
//       ),
//     })

//     expect(screen.getByText(/I SAW A BAT/i)).toBeInTheDocument()
//   })
// })

// it.skip('display the roaster name, location and detail', () => {
//   render(
//     <Provider store={fakeStore}>
//       <MemoryRouter>
//         <Roaster />
//       </MemoryRouter>
//     </Provider>
//   )
//   const listItem = screen.getByRole('listitem')
//   console.log(listItem)
//   expect(listItem).toBeInTheDocument()
// const roasterName = screen.getByText(singleRoaster.name, { expect: false })
//     expect(roasterName).toBeTruthy()
//     const roasterLocation = screen.getByRole('heading')
//     expect(roasterLocation.textContent).toBe('Roaster')
// })

// describe('<Roaster />', () => {
//   it('display the roaster name, location and detail', () => {
//     expect.assertions(2)
//     render(
//       <Provider store={fakeStore}>
//         <BrowserRouter>
//           <Roaster />
//         </BrowserRouter>
//       </Provider>
//     )
//     const roasterName = screen.getByText(singleRoaster.name, { expect: false })
//     expect(roasterName).toBeTruthy()
//     const roasterLocation = screen.getByRole('heading')
//     expect(roasterLocation.textContent).toBe('Roaster')
//   })
// })
