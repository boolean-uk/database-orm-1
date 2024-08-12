const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

router.post('/', async (req, res) => {
  const newPost = await prisma.post.create({
    data: req.body
  });
  res.json(newPost);
});

router.put('/:id', async (req, res) => {
  const updatedPost = await prisma.post.update({
    where: { id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(updatedPost);
});

router.delete('/:id', async (req, res) => {
  await prisma.post.delete({
    where: { id: parseInt(req.params.id) }
  });
  res.sendStatus(204);
});

module.exports = router;
