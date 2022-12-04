import { combineReducers } from 'redux'

import roasters from './roasters'
import cafes from './cafes'
import searchRoasters from './searchRoasters'
import searchResult from './searchResult'
import beans from './beans'

export default combineReducers({
  roasters: roasters,
  cafes: cafes,
  searchRoasters: searchRoasters,
  searchResult: searchResult,
  beans: beans,
})
