import React from 'react'
import { ListGroupItem } from 'reactstrap'

const Post = ( { post } ) => {
    return (
        <ListGroupItem>
            <h3>{ post.title }</h3> <p> - { post.author } </p>
            <p> { post.content } </p>
        </ListGroupItem>
    )
}

export default Post