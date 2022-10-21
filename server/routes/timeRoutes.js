import express from 'express';
import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient()


const route = express.Router();

route.get("/", async (req, res) => {

    const savedtimes = await prisma.posts.findMany({
        select: {
            id: true,
            note:true,
            time: true,
            savedAt: true
        }
    })

    res.json(savedtimes)

})

route.post("/", async (req, res) => {
    const savedtime = await prisma.posts.create({
        data: {
            id: req.body.id,
            note:req.body.note,
            time: req.body.time,

        }
    })
    res.json(savedtime)

})

export default route;