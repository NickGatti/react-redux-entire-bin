import React from 'react'
import Message from './Message.js'

const MessageList = ({messages, funcs}) => {
    let messageList = messages.map( (message, index) => <Message key={index} message={message} funcs={funcs} /> )

    return (
        <div>
            {messageList}
        </div>
    )
}

export default MessageList