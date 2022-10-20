import { PrismaClient } from '@prisma/client'        
const prisma = new PrismaClient()

const seed = async () => {

    await prisma.posts.create({
        data: {
            id: 1,
            note: "First time note",
            time: "00:01:00"
        }
    })

    await prisma.posts.create({
        data: {
            id: 2,
            note: "Second time note",
            time: "00:02:00"
        }
    })

}

seed();

export default seed;