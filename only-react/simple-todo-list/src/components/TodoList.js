import React from 'react'
import Todo from './Todo';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../redux/actions'

import { ListGroup } from 'reactstrap'

export const TodoList = (props) => {
    let todoList = props.todos.map( ( todo, index ) => <Todo key={index} todo={todo} /> )

    return (
        <ListGroup>
            {todoList}
        </ListGroup>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        runAddTodoReducer: bindActionCreators(addTodo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)