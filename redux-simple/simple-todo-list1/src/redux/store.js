import { createStore, combineReducers } from 'redux'
import { getMessageReducer } from './reducers'

const rootReducer = combineReducers({
    messages: getMessage
})

export default () => {
    return(createStore(rootReducer))
}