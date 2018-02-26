import React from 'react'
import { ListGroupItem } from 'reactstrap';

const Post = ( { post } ) => {
    return (
        <ListGroupItem>
            <h3>{post.title}<small> - { post.author } </small></h3>
            <p>{ post.content }</p>
        </ListGroupItem>
    )
}

export default Post