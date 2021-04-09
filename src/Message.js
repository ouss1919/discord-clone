import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';
function Message({name, photo, message, timestamp}) {
    return (
        <div className="message">
            <Avatar src={photo} className="message_img"/>
            <div className="message__body">
                <div className="message__info">
                    <h4>{name}</h4>
                    <p>{timestamp}</p>
                </div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
