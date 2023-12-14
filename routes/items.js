const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET all items
router.get('/', itemsController.getAllItems);

// GET a specific item by ID
router.get('/:id', itemsController.getItemById);

// POST a new item
router.post('/', itemsController.createItem);

// PUT (update) a specific item by ID
router.put('/:id', itemsController.updateItem);

// DELETE a specific item by ID
router.delete('/:id', itemsController.deleteItem);

router.delete('/', itemsController.deleteAllItems);

module.exports = router;
