import React, { useEffect, useState } from 'react'
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
import { selectChannel } from './features/appSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db from './firebase';
function Chat() {
    const channel = useSelector(selectChannel);
    const user = useSelector(selectUser);
    const [messages, setMessages] = useState([])
    const [messageInput, setMessageInput] = useState('');

    const SendMessage = (e) =>{
        e.preventDefault();
        const newMessage = {
            name : user.displayName,
            photo : user.photo,
            message : messageInput,
            timestamp : new Date().toUTCString()
        }
        setMessages([...messages, newMessage]);
        db.collection('channels').doc(channel.channelId).collection('messages').add(newMessage);
        setMessageInput('')
    }
    useEffect(() => {
        channel &&
        db.collection('channels').doc(channel.channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({
                name : doc.data().name,
                photo : doc.data().photo,
                message : doc.data().message,
                timestamp : doc.data().timestamp
           })))
       })
    }, [channel])
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerChatname">
                    <h3><span className="sidebarChannel__hash">#</span>{channel && channel.channelName}</h3>
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
            {messages.map((message) =>(
                    <Message name={message.name} photo={message.photo}
                     message={message.message} timestamp={message.timestamp}/>
                ))}
            </div>

            <div className="chat__footer">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input value={messageInput} onChange ={(e) => setMessageInput(e.target.value)} type="text"
                    placeholder={`Message #TESTCHANEL`}/>
                    <button onClick={SendMessage} className="chatfooter__button" type="submit">Send a Message</button>
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
