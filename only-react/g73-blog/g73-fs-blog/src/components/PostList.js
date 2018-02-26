import React from 'react'

import { ListGroup } from 'reactstrap'

import Post from './Post'

const PostList = ( { posts } ) => {
    let listOfPosts = posts.map( ( post, index ) => {
        return (
            <Post key={ index } post={ post } />
        )
    } )

    return (
        <ListGroup>
            { listOfPosts }
        </ListGroup>
    )
}

export default PostList