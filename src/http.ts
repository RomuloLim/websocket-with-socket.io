import { Server } from 'socket.io';
import express from "express";
import http from "http";
import path from "path";
import cors from 'cors';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "<http://localhost:3000>"
    }
});

export { httpServer, io};