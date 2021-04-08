import React from 'react'
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


function Sidebar() {
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
                    <AddIcon />
                </div>
                <div className="sidebar__chanelList">
                    <SidebarChannel name="Youtube"/>
                    <SidebarChannel name="Test channel"/>
                    <SidebarChannel name="wow it works"/>
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
                    <Avatar>
                    </Avatar>
                    <h3>Oussama Berarma</h3>
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
