import {Server} from "socket.io"

export const startTimer = (io: Server) => {
    let timeLeft = 15*60; // 15 minutes
    
    setInterval(() =>  {
        if (timeLeft > 0){
            timeLeft -= 1; 
        }
        else{
            timeLeft = 15*60;
        }
        io.sockets.emit('timer', timeLeft);
    }, 1000);
};
