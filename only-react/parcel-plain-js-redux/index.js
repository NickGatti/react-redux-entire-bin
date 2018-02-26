import { addTodo } from './redux/actions'
import Store from './redux/store'

let store = new Store()

store.subscribe(() => console.log('store state: ', store.getState()))

store.dispatch(addTodo('hello world 1'))
store.dispatch(addTodo('hello world 2'))
store.dispatch(addTodo('hello world 3'))
store.dispatch(addTodo('hello world 4'))
