import { combineReducers } from 'redux'

import roasters from './roasters'
import cafes from './cafes'

export default combineReducers({
  roasters: roasters,
  cafes:cafes,

})
