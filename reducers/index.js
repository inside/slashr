import {combineReducers} from 'redux'

const zoomReducer = (state = {zooms: {}}, action) => {
  switch (action.type) {
    case 'ZOOM_TOGGLE':
      let zoom = state.zooms[action.id] ? false : true
      let s = {zooms: {...state.zooms, [action.id]: zoom}}
      return s
      break
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  zoomState: zoomReducer,
})

export default combinedReducers
