import { createStore, combineReducers } from 'redux'
import { addItemReducer } from './reducers'

const rootReducer = combineReducers({
    addItem: addItemReducer
})

export default () => {
    return createStore(rootReducer)
}