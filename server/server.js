import express from "express";
import cors from 'cors'
import route from './routes/timeRoutes.js'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = express();
const PORT = 5000;

server.use(express.json());

const corsConfig = {
    origin: "http://localhost:3000"
}

server.use(cors(corsConfig))

server.use("/api/stopwatch", route)


server.get("/", (req, res) => res.json({ message: "Hello World" }));

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
