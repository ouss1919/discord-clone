import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';
function Message() {
    return (
        <div className="message">
            <Avatar className="message_img"/>
            <div className="message__body">
                <div className="message__info">
                    <h4>Oussama Berarma</h4>
                    <p>Times tamps here</p>
                </div>
                <p>how are you guys are you fine</p>
            </div>
        </div>
    )
}

export default Message
