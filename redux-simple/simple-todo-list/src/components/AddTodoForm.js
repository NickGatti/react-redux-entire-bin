import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../redux/actions'

import { Form, Button, FormGroup, Label, Input } from 'reactstrap'

export class AddTodoForm extends Component {

render() {
        return (
            <Form>
                <FormGroup>
                    <Label for='author'>Author</Label>
                    <Input type='text' id='author' placeholder='Author' />

                    <Label for='title'>Title</Label>
                    <Input type='text' id='title' placeholder='Title' />

                    <Label for='content'>Content</Label>
                    <Input type='text' id='content' placeholder='Content' />

                    <Button 
                        onClick={ () => this.props.runAddTodoReducer( {
                            author: document.getElementById('author').value,
                            title: document.getElementById('title').value,
                            content: document.getElementById('content').value
                        } ) }
                    >Submit Todo</Button>
                </FormGroup>
            </Form>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)