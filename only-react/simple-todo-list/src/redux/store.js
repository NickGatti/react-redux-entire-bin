import { createStore, combineReducers } from 'redux'
import { addTodoReducer } from './reducers'

let rootReducers = combineReducers({
    todos: addTodoReducer
})

export default () => {
    return(createStore(rootReducers))
}