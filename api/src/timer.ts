import {Server} from "socket.io"
import User from "./models/user";

export const startTimer = (io: Server) => {
    let timeLeft = 15*60; // 15 minutes
    
    setInterval(async () =>  {
        if (timeLeft > 0){
            timeLeft -= 1; 
        }
        else{
            timeLeft = 15*60;
        }
        try {
            await User.find().sort({bid: -1}).limit(1).findOne((err, entity) => {
                io.sockets.emit('winner', {name: entity.name, price: entity.bid});
            });
        } catch {
            console.log("no users!");
        }
        io.sockets.emit('timer', timeLeft);
    }, 1000);
};
