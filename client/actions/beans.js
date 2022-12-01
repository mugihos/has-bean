import { getBeans } from '../apis/beans'

export const SET_BEANS = 'SET_BEANS'

export function setBeans(beans) {
  return {
    type: SET_BEANS,
    payload: beans,
  }
}

export function fetchBeans() {
  return (dispatch) => {
    return getBeans().then((beans) => {
      dispatch(setBeans(beans))
    })
  }
}
