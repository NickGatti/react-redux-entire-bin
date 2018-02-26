import React from 'react'
import { ListGroup } from 'reactstrap'
import Post from './Post';

const PostList = ( { posts } ) => {
    let postsList = posts.map( ( post, index  )=> {
        return (
            <Post key={ index } post={ post } />
        )
    } )

    return (
        <ListGroup >
            { postsList }
        </ListGroup>
    )
}

export default PostList