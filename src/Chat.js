import React from 'react'
import './Chat.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerChatname">
                    <h3><span className="sidebarChannel__hash">#</span>Youtube</h3>
                </div>
                <div className="chat__headerSearch">
                    <NotificationsIcon />
                    <EditLocationIcon />
                    <PeopleAltIcon />
                    <div className="chat__Search">
                        <input type="text" placeholder="Search"/>
                        <SearchIcon className="searchIcon"/>
                    </div>
                    <SendIcon />
                    <HelpIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
