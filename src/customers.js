const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get a single customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const newCustomer = await prisma.customer.create({
      data: req.body
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Update a customer by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a customer by ID
router.delete('/:id', async (req, res) => {
  try {
    await prisma.customer.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
