const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await prisma.comment.findMany();
  res.json(comments);
});

router.post('/', async (req, res) => {
  const newComment = await prisma.comment.create({
    data: req.body
  });
  res.json(newComment);
});

router.put('/:id', async (req, res) => {
  const updatedComment = await prisma.comment.update({
    where: { id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(updatedComment);
});

router.delete('/:id', async (req, res) => {
  await prisma.comment.delete({
    where: { id: parseInt(req.params.id) }
  });
  res.sendStatus(204);
});

module.exports = router;
