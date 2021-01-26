import React, { useEffect } from 'react'
import io from 'socket.io-client'

// const ENDPOINT = 'https://movieees.herokuapp.com/'
// export const socket = io(ENDPOINT);

// export let socket = io.connect('http://localhost:5000/');


export let socket = io.connect(window.location.hostname)

export const SocketListen = ({preferences, setPreferences, setReceived}) => {

useEffect(()=>{
    socket.on('joint_preferences', (preferences) => {
        setPreferences(preferences)
        setReceived(true)
    })
}, [preferences]
)
    return(
        <div>  
        </div>
    )
}
