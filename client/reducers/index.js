import { combineReducers } from 'redux'

import roasters from './roasters'
import cafes from './cafes'
import searchRoasters from './searchRoasters'

export default combineReducers({
  roasters: roasters,
  cafes:cafes,
  searchRoasters: searchRoasters
})
