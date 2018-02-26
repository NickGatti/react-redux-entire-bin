import { createStore, bindActionCreators } from 'redux'
import { todoReducer } from './reducers'

export default () => {
  return createStore(todoReducer, [])
}