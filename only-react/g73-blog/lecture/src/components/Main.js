import React from 'react'
import PostList from './PostList';
import FormWrapper from './FormWrapper';

const Main = ( { posts, showAddPostForm } ) => {
    return (
        <div>
            <FormWrapper 
                showAddPostForm={ showAddPostForm }
            />
            <PostList 
                posts={ posts } 
            />
        </div>
    )
}

export default Main