import React from 'react'
import AddPostForm from './AddPostForm'

const FormWrapper = (props) => {
    return (
        <div>
            <button>Show Post Form</button>
            { 
                props.showAddPostForm 
                ? <AddPostForm  /> 
                : null
            }
        </div>
    )
}

export default FormWrapper