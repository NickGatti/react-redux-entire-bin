import { createStore, combineReducers } from 'redux'
import { getMessageReducer } from './reducers'

const rootReducer = combineReducers({
    messages: getMessageReducer
})

export default () => {
    return(createStore(rootReducer))
}