import { Request, Response } from "express";

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//👇🏻 New imports
const http = require("http").Server(app);
const cors = require("cors");
const path = require("path");

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "<http://localhost:3000>"
    }
});

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
    res.json({
        message: "Hello world",
    });
});

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/src/index.html'))
});

//👇🏻 Add this before the app.get() block
socketIO.on('connection', (socket: ) => {
    socket.on('chatMessage', (message) => {
        socketIO.emit('chatMessage', message)
    })

    socket.on('disconnect', () => {
      socket.disconnect()
      console.log('🔥: A user disconnected');
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});