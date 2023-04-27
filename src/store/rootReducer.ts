import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  toastr: toastrReducer
})
