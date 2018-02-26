import React from 'react'

import FormWrapper from './FormWrapper';
import PostList from './PostList';

const ComponentWrapper = ( { posts } ) => {
    return (
        <div>
            <FormWrapper />
            <PostList posts={ posts } />
        </div>
    )
}

export default ComponentWrapper