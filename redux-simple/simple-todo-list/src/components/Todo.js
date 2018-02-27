import React from 'react'
import { ListGroupItem } from 'reactstrap'

const Todo = ( { todo } ) => {
    return (
        <ListGroupItem>
            <h3>{ todo.title }<small> - { todo.author }</small></h3>
            <p>{ todo.content }</p>
        </ListGroupItem>
    )
}

export default Todo