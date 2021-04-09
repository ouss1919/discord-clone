import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import PhoneIcon from '@material-ui/icons/Phone';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
import Avatar from '@material-ui/core/Avatar';
import SidebarChannel from './SidebarChannel';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth} from './firebase';



function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    const handleAddChanel = () =>{
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            db.collection('channels').add({
                channelName : channelName,
            })

        }
    }
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
           setChannels(snapshot.docs.map(doc => ({
            id : doc.id,
            channel : doc.data()
           })))
       })
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>Clever Programmer</h2>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsAdd">
                    <div className="sidebar__channelsAdd__header">
                        <ExpandMoreIcon />
                        <h3>text Channels</h3>
                    </div>
                    <AddIcon onClick={handleAddChanel}/>
                </div>
                <div className="sidebar__chanelList">
                    {channels.map(({id , channel}) => (
                        <SidebarChannel id ={id} name={channel.channelName}/>
                    ))}
                </div>
            </div>
            <div className="sidebar__footer">
                    <div className="sidebar__footerVoice">
                        <SignalCellularAltIcon className="sidebar__voiceIcon"
                            fontSize="large"/>
                        <div className="sidebar__footerVoice__desc">
                            <h2>Voice Connected</h2>
                            <p>Stream</p>
                        </div>
                        <div className="sidebar__footerVoice__icons">
                            <InfoOutlinedIcon fontSize="small"/>
                            <PhoneIcon fontSize="small"/>
                        </div>
                    </div>
                    <div className="sidebar__footerAccount">
                    <Avatar onClick={() => auth.signOut()} src={user.photo}>
                    </Avatar>
                    <h3>{user.displayName}</h3>
                    <div className="sidebar__footerAccount__icons">
                        <MicIcon fontSize="small" />
                        <HeadsetIcon fontSize="small" />
                        <SettingsIcon fontSize="small"/>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar
