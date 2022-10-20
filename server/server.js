import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = express();
const PORT = 5000;

server.use(express.json());

server.get("/", (req, res) => res.json({ message: "Hello World" }));

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
