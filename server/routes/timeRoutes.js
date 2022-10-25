import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const route = express.Router();

route.get("/", async (req, res) => {
  const savedtimes = await prisma.posts.findMany({
    select: {
      id: true,
      note: true,
      time: true,
      savedAt: true,
    },
  });

  res.json(savedtimes);
});

route.post("/", async (req, res) => {
  const savedtime = await prisma.posts.create({
    data: {
      note: req.body.note,
      time: req.body.time,
    },
  });
  res.json(savedtime);
});

route.delete("/:id", async (req, res) => {
  await prisma.posts.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.sendStatus(204);
});

route.delete("/", async (req, res) => {
  await prisma.posts.deleteMany({});

  res.sendStatus(204);
});

export default route;
