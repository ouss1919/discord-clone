import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannel } from './features/appSlice';
import './SidebarChannel.css'

function SidebarChannel({id,name}) {
    const dispatch = useDispatch();
    const SetChannel = () => {
        dispatch (setChannel({
            channelId : id,
            channelName : name,
          }))
    }
    return (
        <div onClick={SetChannel} className="sidebarChannel">
            <h4><span className="sidebarChannel__hash">#</span> {name} </h4>
        </div>
    )
}

export default SidebarChannel
