import React, { Component } from 'react'
import WrappedForm from './WrappedForm';

class FormWrapper extends Component {
    state = {
        formShowing: false
    }

    toggleInputForm = () => {
        this.setState( {
            formShowing: !this.state.formShowing
         } )
    }

    render() {
        return (
                <div>
                    <button
                        onClick={ () => this.toggleInputForm() }
                    >Show Input Form</button>
                    { this.state.formShowing ? <WrappedForm /> : null }
                </div>
            )
    }
}

export default FormWrapper