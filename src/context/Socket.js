import react, { useMemo } from "react";
import React from "react";
import {io} from "socket.io-client";

const SocketContext = React.createContext(null);

export const useSocket = () => {
    return React.useContext(SocketContext); 

}


export const SocketProvider = (props)=>{
    const socket  = useMemo(()=>io('http://localhost:3000/Skilltraning/LiveClass'),   [])
    return (
        <SocketContext.Provider value={{socket}}>
            {props.children}
        </SocketContext.Provider>
    )
}