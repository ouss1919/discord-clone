import React from 'react'
import './Chat.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
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

            <div className="chat__body">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__footer">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input type="text"
                    placeholder={`Message #TESTCHANEL`}/>
                    <button className="chatfooter__button" type="submit">Send a Message</button>
                </form>
                <div className="chat__footerIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
