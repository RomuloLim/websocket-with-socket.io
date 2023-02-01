import { io } from './http';

io.on("connection", socket => {
    socket.on("sendMessage", data => {
        console.log(data);
    })
});