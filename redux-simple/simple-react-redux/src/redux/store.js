import { createStore, combineReducers } from 'redux'
import { counterReducer } from './reducers'

let rootReducer = combineReducers({
  counter: counterReducer
})

export default () => {
  return createStore(rootReducer)
}